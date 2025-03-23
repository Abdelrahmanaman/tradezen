import {
	sqliteTable,
	text,
	integer,
	real,
	index,
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

// Auth Tables
export const user = sqliteTable("user", {
	id: text("id").primaryKey(),
	name: text("name"),
	email: text("email").notNull().unique(),
	emailVerified: integer("email_verified", { mode: "boolean" }).notNull(),
	image: text("image"),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	userName: text("user_name").notNull().unique(),
	totalCoins: integer("total_coins").notNull().default(0), // Platform coins
	paypalEmail: text("paypal_email"), // For cashouts
	preferredPaymentMethod: text("preferred_payment_method"),
});

export const session = sqliteTable("session", {
	id: text("id").primaryKey(),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
	token: text("token").notNull().unique(),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
	updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
	id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: integer("access_token_expires_at", {
		mode: "timestamp",
	}),
	refreshTokenExpiresAt: integer("refresh_token_expires_at", {
		mode: "timestamp",
	}),
	scope: text("scope"),
	password: text("password"),
	createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
	updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});
// Added verification table back
export const verification = sqliteTable("verification", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
	createdAt: integer("created_at", { mode: "timestamp" }),
	updatedAt: integer("updated_at", { mode: "timestamp" }),
});

// Games Table
export const games = sqliteTable("games", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull().unique(),
	description: text("description"),
	logoUrl: text("logo_url"),
	isActive: integer("is_active", { mode: "boolean" }).default(true),
	sortOrder: integer("sort_order").default(0),
});

// Categories Table
export const categories = sqliteTable(
	"categories",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		name: text("name").notNull(),
		description: text("description"),
		sortOrder: integer("sort_order").default(0),
	},
	(table) => [index("idx_categories_game_id").on(table.gameId)],
);

// Rarity Types Table
export const rarityTypes = sqliteTable(
	"rarity_types",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		name: text("name").notNull(),
		displayName: text("display_name"),
		colorHex: text("color_hex"),
		sortOrder: integer("sort_order").default(0),
	},
	(table) => [
		index("idx_rarity_types_game_id").on(table.gameId),
		index("idx_rarity_types_unique").on(table.gameId, table.name),
	],
);

// Items Table
export const items = sqliteTable(
	"items",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "restrict" }),
		categoryId: integer("category_id")
			.notNull()
			.references(() => categories.id, { onDelete: "restrict" }),
		name: text("name").notNull(),
		description: text("description"),
		rarityId: integer("rarity_id").references(() => rarityTypes.id, {
			onDelete: "set null",
		}),
		imageUrl: text("image_url").notNull(),
		suggestedPrice: integer("suggested_price"),
		isActive: integer("is_active", { mode: "boolean" }).default(true),
		metadata: text("metadata", { mode: "json" }),
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	},
	(table) => [
		index("idx_items_game_id").on(table.gameId),
		index("idx_items_category_id").on(table.categoryId),
		index("idx_items_name").on(table.name),
		index("idx_items_rarity_id").on(table.rarityId),
	],
);

// User Inventory Table
export const inventory = sqliteTable(
	"inventory",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "restrict" }),
		userSpecifiedRarityId: integer("user_specified_rarity_id").references(
			() => rarityTypes.id,
			{ onDelete: "set null" },
		),
		quantity: integer("quantity").notNull().default(1),
		acquired: text("acquired").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
		notes: text("notes"),
	},
	(table) => [
		index("idx_inventory_user_id").on(table.userId),
		index("idx_inventory_item_id").on(table.itemId),
	],
);

// Listings Table
export const listings = sqliteTable(
	"listings",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		sellerId: text("seller_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "restrict" }),
		inventoryId: integer("inventory_id")
			.notNull()
			.references(() => inventory.id, { onDelete: "cascade" }),
		price: integer("price").notNull(),
		quantity: integer("quantity").default(1),
		userSpecifiedRarityId: integer("user_specified_rarity_id").references(
			() => rarityTypes.id,
			{ onDelete: "set null" },
		),
		status: text("status").notNull().default("active"),
		featured: integer("featured", { mode: "boolean" }).default(false),
		expiresAt: text("expires_at"), // Changed to text
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
		updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	},
	(table) => [
		index("idx_listings_status").on(table.status),
		index("idx_listings_seller_id").on(table.sellerId),
		index("idx_listings_item_id").on(table.itemId),
		index("idx_listings_featured").on(table.featured),
	],
);

// Transactions Table (for completed sales)
export const transactions = sqliteTable(
	"transactions",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		listingId: integer("listing_id").references(() => listings.id, {
			onDelete: "set null",
		}),
		buyerId: text("buyer_id")
			.notNull()
			.references(() => user.id, { onDelete: "restrict" }),
		sellerId: text("seller_id")
			.notNull()
			.references(() => user.id, { onDelete: "restrict" }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "restrict" }),
		price: integer("price").notNull(),
		quantity: integer("quantity").notNull().default(1),
		transactionType: text("transaction_type").notNull(),
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	},
	(table) => [
		index("idx_transactions_buyer_id").on(table.buyerId),
		index("idx_transactions_seller_id").on(table.sellerId),
	],
);

// Trades Table
export const trades = sqliteTable(
	"trades",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		initiatorId: text("initiator_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		receiverId: text("receiver_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		initiatorCoinsOffered: integer("initiator_coins_offered").default(0),
		receiverCoinsRequested: integer("receiver_coins_requested").default(0),
		status: text("status").notNull().default("pending"),
		message: text("message"),
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
		updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
		completedAt: text("completed_at"), // Changed to text
	},
	(table) => [
		index("idx_trades_initiator_id").on(table.initiatorId),
		index("idx_trades_receiver_id").on(table.receiverId),
		index("idx_trades_status").on(table.status),
	],
);

// Trade Items Table
export const tradeItems = sqliteTable(
	"trade_items",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		tradeId: integer("trade_id")
			.notNull()
			.references(() => trades.id, { onDelete: "cascade" }),
		inventoryId: integer("inventory_id")
			.notNull()
			.references(() => inventory.id, { onDelete: "restrict" }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "restrict" }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		quantity: integer("quantity").default(1),
	},
	(table) => [
		index("idx_trade_items_trade_id").on(table.tradeId),
		index("idx_trade_items_user_id").on(table.userId),
	],
);

// Coin Purchases Table (buying platform coins)
export const coinPurchases = sqliteTable(
	"coin_purchases",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		coinsAmount: integer("coins_amount").notNull(),
		cashAmount: real("cash_amount").notNull(),
		paymentMethod: text("payment_method").notNull(),
		paymentReference: text("payment_reference"),
		status: text("status").notNull().default("completed"),
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	},
	(table) => [index("idx_coin_purchases_user_id").on(table.userId)],
);

// Coin Cashouts Table (cashing out platform coins)
export const coinCashouts = sqliteTable(
	"coin_cashouts",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		coinsAmount: integer("coins_amount").notNull(),
		cashAmount: real("cash_amount").notNull(),
		paymentMethod: text("payment_method").notNull(),
		paymentDetails: text("payment_details"),
		status: text("status").notNull().default("pending"),
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
		processedAt: text("processed_at"), // Changed to text
		notes: text("notes"),
	},
	(table) => [
		index("idx_coin_cashouts_user_id").on(table.userId),
		index("idx_coin_cashouts_status").on(table.status),
	],
);

// Search History
export const searchHistory = sqliteTable(
	"search_history",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		searchQuery: text("search_query").notNull(),
		gameId: integer("game_id").references(() => games.id, {
			onDelete: "set null",
		}),
		categoryId: integer("category_id").references(() => categories.id, {
			onDelete: "set null",
		}),
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`), // Changed to text
	},
	(table) => [index("idx_search_history_user_id").on(table.userId)],
);

// Price History (for analytics and charts)
export const priceHistory = sqliteTable(
	"price_history",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "cascade" }),
		averagePrice: integer("average_price").notNull(),
		volume: integer("volume").notNull(),
		date: text("date").notNull(), // Changed to text
	},
	(table) => [
		index("idx_price_history_item_id").on(table.itemId),
		index("idx_price_history_date").on(table.date),
	],
);

// Relations
export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	inventory: many(inventory),
	listings: many(listings, { relationName: "seller" }),
	buyerTransactions: many(transactions, { relationName: "buyer" }),
	sellerTransactions: many(transactions, { relationName: "seller" }),
	initiatedTrades: many(trades, { relationName: "initiator" }),
	receivedTrades: many(trades, { relationName: "receiver" }),
	tradeItems: many(tradeItems),
	coinPurchases: many(coinPurchases),
	coinCashouts: many(coinCashouts),
	searchHistory: many(searchHistory),
}));

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const accountRelations = relations(account, ({ one }) => ({
	user: one(user, { fields: [account.userId], references: [user.id] }),
}));

// export const verificationRelations = relations(verification, (({ }) => ({})));

export const gamesRelations = relations(games, ({ many }) => ({
	categories: many(categories),
	items: many(items),
	rarityTypes: many(rarityTypes),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
	game: one(games, { fields: [categories.gameId], references: [games.id] }),
	items: many(items),
}));

export const rarityTypesRelations = relations(rarityTypes, ({ one, many }) => ({
	game: one(games, { fields: [rarityTypes.gameId], references: [games.id] }),
	items: many(items),
	inventoryItems: many(inventory, { relationName: "userSpecifiedRarity" }),
	listings: many(listings, { relationName: "userSpecifiedRarity" }),
}));

export const itemsRelations = relations(items, ({ one, many }) => ({
	game: one(games, { fields: [items.gameId], references: [games.id] }),
	category: one(categories, {
		fields: [items.categoryId],
		references: [categories.id],
	}),
	rarity: one(rarityTypes, {
		fields: [items.rarityId],
		references: [rarityTypes.id],
	}),
	inventoryEntries: many(inventory),
	listings: many(listings),
	transactions: many(transactions),
	priceHistory: many(priceHistory),
}));

export const inventoryRelations = relations(inventory, ({ one, many }) => ({
	user: one(user, { fields: [inventory.userId], references: [user.id] }),
	item: one(items, { fields: [inventory.itemId], references: [items.id] }),
	userSpecifiedRarity: one(rarityTypes, {
		fields: [inventory.userSpecifiedRarityId],
		references: [rarityTypes.id],
		relationName: "userSpecifiedRarity",
	}),
	listings: many(listings),
	tradeItems: many(tradeItems),
}));

export const listingsRelations = relations(listings, ({ one, many }) => ({
	seller: one(user, {
		fields: [listings.sellerId],
		references: [user.id],
		relationName: "seller",
	}),
	item: one(items, { fields: [listings.itemId], references: [items.id] }),
	inventoryItem: one(inventory, {
		fields: [listings.inventoryId],
		references: [inventory.id],
	}),
	userSpecifiedRarity: one(rarityTypes, {
		fields: [listings.userSpecifiedRarityId],
		references: [rarityTypes.id],
		relationName: "userSpecifiedRarity",
	}),
	transactions: many(transactions),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
	buyer: one(user, {
		fields: [transactions.buyerId],
		references: [user.id],
		relationName: "buyer",
	}),
	seller: one(user, {
		fields: [transactions.sellerId],
		references: [user.id],
		relationName: "seller",
	}),
	listing: one(listings, {
		fields: [transactions.listingId],
		references: [listings.id],
	}),
	item: one(items, { fields: [transactions.itemId], references: [items.id] }),
}));

export const tradesRelations = relations(trades, ({ one, many }) => ({
	initiator: one(user, {
		fields: [trades.initiatorId],
		references: [user.id],
		relationName: "initiator",
	}),
	receiver: one(user, {
		fields: [trades.receiverId],
		references: [user.id],
		relationName: "receiver",
	}),
	items: many(tradeItems),
}));

export const tradeItemsRelations = relations(tradeItems, ({ one }) => ({
	trade: one(trades, { fields: [tradeItems.tradeId], references: [trades.id] }),
	inventoryItem: one(inventory, {
		fields: [tradeItems.inventoryId],
		references: [inventory.id],
	}),
	item: one(items, { fields: [tradeItems.itemId], references: [items.id] }),
	user: one(user, { fields: [tradeItems.userId], references: [user.id] }),
}));

export const coinPurchasesRelations = relations(coinPurchases, ({ one }) => ({
	user: one(user, { fields: [coinPurchases.userId], references: [user.id] }),
}));

export const coinCashoutsRelations = relations(coinCashouts, ({ one }) => ({
	user: one(user, { fields: [coinCashouts.userId], references: [user.id] }),
}));

export const searchHistoryRelations = relations(searchHistory, ({ one }) => ({
	user: one(user, { fields: [searchHistory.userId], references: [user.id] }),
	game: one(games, { fields: [searchHistory.gameId], references: [games.id] }),
	category: one(categories, {
		fields: [searchHistory.categoryId],
		references: [categories.id],
	}),
}));

export const priceHistoryRelations = relations(priceHistory, ({ one }) => ({
	item: one(items, { fields: [priceHistory.itemId], references: [items.id] }),
}));
