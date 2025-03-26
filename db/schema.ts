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
	userName: text("user_name").notNull().unique(),
	totalCoins: integer("total_coins").notNull().default(0),
	paypalEmail: text("paypal_email"),
	preferredPaymentMethod: text("preferred_payment_method"),
	bio: text("bio"),
	reputationScore: real("reputation_score").default(0),
	followersCount: integer("followers_count").notNull().default(0),
	followingCount: integer("following_count").notNull().default(0),
	tradeCount: integer("trade_count").notNull().default(0),
	createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
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

// Rarity Types Table (For base rarities and listing-specific rarities)
export const rarityTypes = sqliteTable(
	"rarity_types",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		name: text("name").notNull(), // e.g., "Common", "Legendary", "Neon", "Mega Neon", etc.
		displayName: text("display_name"),
		colorHex: text("color_hex"),
		sortOrder: integer("sort_order").default(0),
	},
	(table) => [
		index("idx_rarity_types_game_id").on(table.gameId),
		index("idx_rarity_types_unique").on(table.gameId, table.name),
	],
);

// Items Table (Base Item Information)
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
		imageUrl: text("image_url").notNull(),
		suggestedPrice: integer("suggested_price"),
		isActive: integer("is_active", { mode: "boolean" }).default(true),
		slug: text("slug").notNull().unique(),
		metadata: text("metadata", { mode: "json" }), // Optional metadata for the base item if needed
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [
		index("idx_items_game_id").on(table.gameId),
		index("idx_items_category_id").on(table.categoryId),
		index("idx_items_name").on(table.name),
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
		price: integer("price").notNull(),
		quantity: integer("quantity").default(1),
		listingRarityId: integer("listing_rarity_id").references(
			() => rarityTypes.id,
			{ onDelete: "set null" },
		),
		status: text("status").notNull().default("active"),
		featured: integer("featured", { mode: "boolean" }).default(false),
		expiresAt: text("expires_at"),
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
		updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
		metadata: text("metadata", { mode: "json" }), // Game-specific attributes (Neon, Fly, Affixes, etc.)
	},
	(table) => [
		index("idx_listings_status").on(table.status),
		index("idx_listings_seller_id").on(table.sellerId),
		index("idx_listings_item_id").on(table.itemId),
		index("idx_listings_listing_rarity_id").on(table.listingRarityId),
		index("idx_listings_featured").on(table.featured),
	],
);

// Transactions Table
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
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`),
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
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
		updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
		completedAt: text("completed_at"),
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
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "restrict" }),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		quantity: integer("quantity").default(1),
		userSpecifiedRarityId: integer("user_specified_rarity_id").references(
			() => rarityTypes.id,
			{ onDelete: "set null" },
		),
		metadata: text("metadata", { mode: "json" }), // Game-specific attributes for the traded item
	},
	(table) => [
		index("idx_trade_items_trade_id").on(table.tradeId),
		index("idx_trade_items_user_id").on(table.userId),
		index("idx_trade_items_rarity_id").on(table.userSpecifiedRarityId),
	],
);

// Coin Purchases Table
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
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [index("idx_coin_purchases_user_id").on(table.userId)],
);

// Coin Cashouts Table (continued)
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
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`),
		processedAt: text("processed_at"),
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
		timestamp: text("timestamp").notNull().default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [index("idx_search_history_user_id").on(table.userId)],
);

// Price History
export const priceHistory = sqliteTable(
	"price_history",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "cascade" }),
		averagePrice: integer("average_price").notNull(),
		volume: integer("volume").notNull(),
		date: text("date").notNull(),
	},
	(table) => [
		index("idx_price_history_item_id").on(table.itemId),
		index("idx_price_history_date").on(table.date),
	],
);

// User Reviews
export const userReviews = sqliteTable(
	"user_reviews",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		reviewerId: text("reviewer_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		targetUserId: text("target_user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		tradeId: integer("trade_id").references(() => trades.id, {
			onDelete: "set null",
		}),
		rating: integer("rating").notNull(), // e.g., 1-5 stars
		comment: text("comment"),
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
		isVisible: integer("is_visible", { mode: "boolean" })
			.notNull()
			.default(true),
	},
	(table) => [
		index("idx_user_reviews_reviewer_id").on(table.reviewerId),
		index("idx_user_reviews_target_user_id").on(table.targetUserId),
		index("idx_user_reviews_unique_per_trade").on(
			table.reviewerId,
			table.targetUserId,
			table.tradeId,
		),
	],
);

// User Followers Relationship Table
export const userFollows = sqliteTable(
	"user_follows",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		followerId: text("follower_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		followingId: text("following_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [
		index("idx_user_follows_unique").on(table.followerId, table.followingId),
		index("idx_user_follows_follower_id").on(table.followerId),
		index("idx_user_follows_following_id").on(table.followingId),
	],
);

// Relations
export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	listings: many(listings, { relationName: "seller" }),
	buyerTransactions: many(transactions, { relationName: "buyer" }),
	sellerTransactions: many(transactions, { relationName: "seller" }),
	initiatedTrades: many(trades, { relationName: "initiator" }),
	receivedTrades: many(trades, { relationName: "receiver" }),
	tradeItems: many(tradeItems),
	coinPurchases: many(coinPurchases),
	coinCashouts: many(coinCashouts),
	searchHistory: many(searchHistory),
	receivedReviews: many(userReviews, { relationName: "receivedReviews" }),
	givenReviews: many(userReviews, { relationName: "givenReviews" }),
	followers: many(userFollows, { relationName: "followers" }),
	following: many(userFollows, { relationName: "following" }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, { fields: [session.userId], references: [user.id] }),
}));

export const accountRelations = relations(account, ({ one }) => ({
	user: one(user, { fields: [account.userId], references: [user.id] }),
}));

export const userReviewsRelations = relations(userReviews, ({ one }) => ({
	reviewer: one(user, {
		fields: [userReviews.reviewerId],
		references: [user.id],
		relationName: "givenReviews",
	}),
	targetUser: one(user, {
		fields: [userReviews.targetUserId],
		references: [user.id],
		relationName: "receivedReviews",
	}),
	trade: one(trades, {
		fields: [userReviews.tradeId],
		references: [trades.id],
	}),
}));

export const userFollowsRelations = relations(userFollows, ({ one }) => ({
	follower: one(user, {
		fields: [userFollows.followerId],
		references: [user.id],
		relationName: "following",
	}),
	following: one(user, {
		fields: [userFollows.followingId],
		references: [user.id],
		relationName: "followers",
	}),
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
	listings: many(listings, { relationName: "listingRarity" }),
}));

export const itemsRelations = relations(items, ({ one, many }) => ({
	game: one(games, { fields: [items.gameId], references: [games.id] }),
	category: one(categories, {
		fields: [items.categoryId],
		references: [categories.id],
	}),
	listings: many(listings),
	transactions: many(transactions),
	priceHistory: many(priceHistory),
}));

export const listingsRelations = relations(listings, ({ one, many }) => ({
	seller: one(user, {
		fields: [listings.sellerId],
		references: [user.id],
		relationName: "seller",
	}),
	item: one(items, { fields: [listings.itemId], references: [items.id] }),
	listingRarity: one(rarityTypes, {
		fields: [listings.listingRarityId],
		references: [rarityTypes.id],
		relationName: "listingRarity",
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
	item: one(items, {
		fields: [transactions.itemId],
		references: [items.id],
	}),
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
	trade: one(trades, {
		fields: [tradeItems.tradeId],
		references: [trades.id],
	}),
	item: one(items, {
		fields: [tradeItems.itemId],
		references: [items.id],
	}),
	user: one(user, {
		fields: [tradeItems.userId],
		references: [user.id],
	}),
	userSpecifiedRarity: one(rarityTypes, {
		fields: [tradeItems.userSpecifiedRarityId],
		references: [rarityTypes.id],
	}),
}));

export const coinPurchasesRelations = relations(coinPurchases, ({ one }) => ({
	user: one(user, {
		fields: [coinPurchases.userId],
		references: [user.id],
	}),
}));

export const coinCashoutsRelations = relations(coinCashouts, ({ one }) => ({
	user: one(user, {
		fields: [coinCashouts.userId],
		references: [user.id],
	}),
}));

export const searchHistoryRelations = relations(searchHistory, ({ one }) => ({
	user: one(user, {
		fields: [searchHistory.userId],
		references: [user.id],
	}),
	game: one(games, {
		fields: [searchHistory.gameId],
		references: [games.id],
	}),
	category: one(categories, {
		fields: [searchHistory.categoryId],
		references: [categories.id],
	}),
}));

export const priceHistoryRelations = relations(priceHistory, ({ one }) => ({
	item: one(items, {
		fields: [priceHistory.itemId],
		references: [items.id],
	}),
}));
