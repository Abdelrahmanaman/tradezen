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
	emailVerified: integer("email_verified", { mode: "timestamp" }),
	image: text("image"),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	userName: text("user_name").notNull().unique(),
	totalCoins: integer("total_coins").notNull().default(0), // Platform coins
	paypalEmail: text("paypal_email"), // For cashouts
	preferredPaymentMethod: text("preferred_payment_method"),
});

export const session = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id").notNull(),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
	token: text("token").notNull().unique(),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

export const account = sqliteTable("account", {
	id: text("id").primaryKey(),
	userId: text("user_id").notNull(),
	type: text("type").notNull(),
	provider: text("provider").notNull(),
	providerAccountId: text("provider_account_id").notNull(),
	refreshToken: text("refresh_token"),
	accessToken: text("access_token"),
	expiresAt: integer("expires_at", { mode: "timestamp" }),
	tokenType: text("token_type"),
	scope: text("scope"),
	idToken: text("id_token"),
	sessionState: text("session_state"),
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
		gameId: integer("game_id").notNull(),
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
		gameId: integer("game_id").notNull(),
		name: text("name").notNull(), // e.g., "Normal", "Uncommon", "Rare", "Legendary", "Neon", etc.
		displayName: text("display_name"), // For frontend display
		colorHex: text("color_hex"), // For styling
		sortOrder: integer("sort_order").default(0),
	},
	(table) => [
		index("idx_rarity_types_game_id").on(table.gameId),
		// Ensure unique rarity names within a game
		index("idx_rarity_types_unique").on(table.gameId, table.name),
	],
);

// Items Table
export const items = sqliteTable(
	"items",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		gameId: integer("game_id").notNull(),
		categoryId: integer("category_id").notNull(),
		name: text("name").notNull(),
		description: text("description"),
		rarityId: integer("rarity_id"),
		imageUrl: text("image_url").notNull(),
		suggestedPrice: integer("suggested_price"), // Suggested price in platform coins
		isActive: integer("is_active", { mode: "boolean" }).default(true),
		metadata: text("metadata", { mode: "json" }), // Additional game-specific properties
		createdAt: integer("created_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
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
		userId: text("user_id").notNull(),
		itemId: integer("item_id").notNull(),
		userSpecifiedRarityId: integer("user_specified_rarity_id"), // User can override the rarity
		quantity: integer("quantity").notNull().default(1),
		acquired: integer("acquired", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
		notes: text("notes"), // User's private notes about this item
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
		sellerId: text("seller_id").notNull(),
		itemId: integer("item_id").notNull(),
		inventoryId: integer("inventory_id").notNull(), // The specific inventory item being sold
		price: integer("price").notNull(), // Price in platform coins
		quantity: integer("quantity").default(1),
		userSpecifiedRarityId: integer("user_specified_rarity_id"), // Allow seller to specify rarity when listing
		status: text("status").notNull().default("active"), // active, sold, cancelled
		featured: integer("featured", { mode: "boolean" }).default(false), // For premium listings
		expiresAt: integer("expires_at", { mode: "timestamp" }),
		createdAt: integer("created_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
		updatedAt: integer("updated_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
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
		listingId: integer("listing_id"),
		buyerId: text("buyer_id").notNull(),
		sellerId: text("seller_id").notNull(),
		itemId: integer("item_id").notNull(),
		price: integer("price").notNull(), // Price in platform coins
		quantity: integer("quantity").notNull().default(1),
		transactionType: text("transaction_type").notNull(), // "listing_purchase", "direct_purchase", etc.
		timestamp: integer("timestamp", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
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
		initiatorId: text("initiator_id").notNull(),
		receiverId: text("receiver_id").notNull(),
		initiatorCoinsOffered: integer("initiator_coins_offered").default(0), // Optional coins from initiator
		receiverCoinsRequested: integer("receiver_coins_requested").default(0), // Optional coins from receiver
		status: text("status").notNull().default("pending"), // pending, accepted, rejected, completed, cancelled
		message: text("message"), // Optional message about the trade
		createdAt: integer("created_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
		updatedAt: integer("updated_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
		completedAt: integer("completed_at", { mode: "timestamp" }),
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
		tradeId: integer("trade_id").notNull(),
		inventoryId: integer("inventory_id").notNull(), // Reference to the inventory item being traded
		itemId: integer("item_id").notNull(),
		userId: text("user_id").notNull(), // The user offering this item
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
		userId: text("user_id").notNull(),
		coinsAmount: integer("coins_amount").notNull(),
		cashAmount: real("cash_amount").notNull(), // e.g., $3.99
		paymentMethod: text("payment_method").notNull(), // e.g., "paypal", "stripe", "crypto"
		paymentReference: text("payment_reference"),
		status: text("status").notNull().default("completed"), // pending, completed, failed, refunded
		timestamp: integer("timestamp", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [index("idx_coin_purchases_user_id").on(table.userId)],
);

// Coin Cashouts Table (cashing out platform coins)
export const coinCashouts = sqliteTable(
	"coin_cashouts",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		userId: text("user_id").notNull(),
		coinsAmount: integer("coins_amount").notNull(),
		cashAmount: real("cash_amount").notNull(), // e.g., $1.49 per 1000 coins
		paymentMethod: text("payment_method").notNull(), // e.g., "paypal", "bank_transfer"
		paymentDetails: text("payment_details"), // e.g., PayPal email or last 4 digits of bank account
		status: text("status").notNull().default("pending"), // pending, processing, completed, rejected
		timestamp: integer("timestamp", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
		processedAt: integer("processed_at", { mode: "timestamp" }),
		notes: text("notes"), // Admin notes about this cashout
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
		userId: text("user_id").notNull(),
		searchQuery: text("search_query").notNull(),
		gameId: integer("game_id"),
		categoryId: integer("category_id"),
		timestamp: integer("timestamp", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [index("idx_search_history_user_id").on(table.userId)],
);

// Price History (for analytics and charts)
export const priceHistory = sqliteTable(
	"price_history",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		itemId: integer("item_id").notNull(),
		averagePrice: integer("average_price").notNull(),
		volume: integer("volume").notNull(),
		date: integer("date", { mode: "timestamp" }).notNull(),
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
