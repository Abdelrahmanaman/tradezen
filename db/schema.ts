import {
	pgTable,
	text,
	integer,
	real,
	index,
	serial, // Use serial for auto-incrementing primary keys in PostgreSQL
	timestamp,
	boolean,
	jsonb, // For JSON data
} from "drizzle-orm/pg-core";

import { relations, sql } from "drizzle-orm";

export const timestamps = {
	updatedAt: timestamp("updated_at", { withTimezone: true })
		.notNull()
		.default(sql`now()`),
	createdAt: timestamp("created_at", { withTimezone: true })
		.notNull()
		.default(sql`now()`),
};

// Auth Tables

export const user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text("name"),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified").notNull(),
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
	...timestamps,
});

export const session = pgTable("session", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
	token: text("token").notNull().unique(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	...timestamps,
});

export const account = pgTable("account", {
	id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at", {
		withTimezone: true,
	}),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at", {
		withTimezone: true,
	}),
	scope: text("scope"),
	password: text("password"),
	...timestamps,
});

export const verification = pgTable("verification", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
	...timestamps,
});

// Games Table

export const games = pgTable("games", {
	id: serial("id").primaryKey(),
	name: text("name").notNull().unique(),
	description: text("description"),
	logoUrl: text("logo_url"),
	isActive: boolean("is_active").default(true),
	sortOrder: integer("sort_order").default(0),
	...timestamps,
});

// Categories Table

export const categories = pgTable(
	"categories",
	{
		id: serial("id").primaryKey(),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		name: text("name").notNull(),
		description: text("description"),
		sortOrder: integer("sort_order").default(0),
		...timestamps,
	},
	(table) => [index("idx_categories_game_id").on(table.gameId)],
);

// Rarity Types Table (For base rarities and listing-specific rarities)

export const rarityTypes = pgTable(
	"rarity_types",
	{
		id: serial("id").primaryKey(),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		name: text("name").notNull(), // e.g.,"Common","Legendary","Neon","Mega Neon",etc.
		displayName: text("display_name"),
		colorHex: text("color_hex"),
		sortOrder: integer("sort_order").default(0),
		...timestamps,
	},
	(table) => [
		index("idx_rarity_types_game_id").on(table.gameId),
		index("idx_rarity_types_unique").on(table.gameId, table.name),
	],
);

// Items Table (Base Item Information)

export const items = pgTable(
	"items",
	{
		id: serial("id").primaryKey(),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }), // Changed to "cascade"
		categoryId: integer("category_id")
			.notNull()
			.references(() => categories.id, { onDelete: "cascade" }), // Changed to "cascade"
		name: text("name").notNull(),
		description: text("description"),
		imageUrl: text("image_url").notNull(),
		suggestedPrice: integer("suggested_price"),
		isActive: boolean("is_active").default(true),
		slug: text("slug").notNull().unique(),
		metadata: jsonb("metadata"), // Use jsonb for JSON
		rarityTypeId: integer("rarity_type_id").references(() => rarityTypes.id, {
			onDelete: "set null",
		}),
		...timestamps,
	},
	(table) => [
		index("idx_items_game_id").on(table.gameId),
		index("idx_items_category_id").on(table.categoryId),
		index("idx_items_name").on(table.name),
		index("idx_items_rarity_type_id").on(table.rarityTypeId), // Add index for the new column
	],
);

// Listings Table

export const listings = pgTable(
	"listings",
	{
		id: serial("id").primaryKey(),
		sellerId: text("seller_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "cascade" }), // Changed to "cascade"
		price: integer("price").notNull(),
		quantity: integer("quantity").default(1),
		age: text("age"),
		lookingFor: text("looking_for").array(), // Use array for string arrays
		listingRarityId: integer("listing_rarity_id").references(
			() => rarityTypes.id,
			{ onDelete: "set null" },
		),
		status: text("status").notNull().default("active"),
		featured: boolean("featured").default(false),
		slug: text("slug").notNull(),
		expiresAt: timestamp("expires_at", { withTimezone: true }),
		metadata: jsonb("metadata"), // Use jsonb for JSON
		...timestamps,
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

export const transactions = pgTable(
	"transactions",
	{
		id: serial("id").primaryKey(),
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
		timestamp: timestamp("timestamp").notNull().default(sql`now()`), // Keep this as it represents the transaction time
		...timestamps, // Add for tracking when the transaction record itself was created/updated
	},
	(table) => [
		index("idx_transactions_buyer_id").on(table.buyerId),
		index("idx_transactions_seller_id").on(table.sellerId),
	],
);

// Trades Table

export const trades = pgTable(
	"trades",
	{
		id: serial("id").primaryKey(),
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
		completedAt: timestamp("completed_at", { withTimezone: true }),
		...timestamps,
	},
	(table) => [
		index("idx_trades_initiator_id").on(table.initiatorId),
		index("idx_trades_receiver_id").on(table.receiverId),
		index("idx_trades_status").on(table.status),
	],
);

// Trade Items Table

export const tradeItems = pgTable(
	"trade_items",
	{
		id: serial("id").primaryKey(),
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
		metadata: jsonb("metadata"), // Use jsonb for JSON
		...timestamps,
	},
	(table) => [
		index("idx_trade_items_trade_id").on(table.tradeId),
		index("idx_trade_items_user_id").on(table.userId),
		index("idx_trade_items_rarity_id").on(table.userSpecifiedRarityId),
	],
);

// Coin Purchases Table

export const coinPurchases = pgTable(
	"coin_purchases",
	{
		id: serial("id").primaryKey(),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		coinsAmount: integer("coins_amount").notNull(),
		cashAmount: real("cash_amount").notNull(),
		paymentMethod: text("payment_method").notNull(),
		paymentReference: text("payment_reference"),
		status: text("status").notNull().default("completed"),
		timestamp: timestamp("timestamp").notNull().default(sql`now()`), // Keep this as it represents the purchase time
		...timestamps, // Add for tracking when the purchase record itself was created/updated
	},
	(table) => [index("idx_coin_purchases_user_id").on(table.userId)],
);

// Coin Cashouts Table (continued)

export const coinCashouts = pgTable(
	"coin_cashouts",
	{
		id: serial("id").primaryKey(),
		userId: text("user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		coinsAmount: integer("coins_amount").notNull(),
		cashAmount: real("cash_amount").notNull(),
		paymentMethod: text("payment_method").notNull(),
		paymentDetails: text("payment_details"),
		status: text("status").notNull().default("pending"),
		timestamp: timestamp("timestamp").notNull().default(sql`now()`), // Keep this as it represents the request time
		processedAt: timestamp("processed_at", { withTimezone: true }),
		notes: text("notes"),
		...timestamps, // Add for tracking when the cashout record itself was created/updated
	},
	(table) => [
		index("idx_coin_cashouts_user_id").on(table.userId),
		index("idx_coin_cashouts_status").on(table.status),
	],
);

// Search History

export const searchHistory = pgTable(
	"search_history",
	{
		id: serial("id").primaryKey(),
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
		timestamp: timestamp("timestamp").notNull().default(sql`now()`), // Keep this as it represents the search time
		...timestamps, // Add for tracking when the search history record itself was created/updated
	},
	(table) => [index("idx_search_history_user_id").on(table.userId)],
);

// Price History

export const priceHistory = pgTable(
	"price_history",
	{
		id: serial("id").primaryKey(),
		itemId: integer("item_id")
			.notNull()
			.references(() => items.id, { onDelete: "cascade" }),
		averagePrice: integer("average_price").notNull(),
		volume: integer("volume").notNull(),
		date: text("date").notNull(),
		...timestamps,
	},
	(table) => [
		index("idx_price_history_item_id").on(table.itemId),
		index("idx_price_history_date").on(table.date),
	],
);

// User Reviews

export const userReviews = pgTable(
	"user_reviews",
	{
		id: serial("id").primaryKey(),
		reviewerId: text("reviewer_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		targetUserId: text("target_user_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		tradeId: integer("trade_id").references(() => trades.id, {
			onDelete: "set null",
		}),
		rating: integer("rating").notNull(), // e.g.,1-5 stars
		comment: text("comment"),
		isVisible: boolean("is_visible").notNull().default(true),
		...timestamps,
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

export const userFollows = pgTable(
	"user_follows",
	{
		id: serial("id").primaryKey(),
		followerId: text("follower_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		followingId: text("following_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		...timestamps,
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
	rarityType: one(rarityTypes, {
		// Add relation to rarityTypes
		fields: [items.rarityTypeId],
		references: [rarityTypes.id],
	}),
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
