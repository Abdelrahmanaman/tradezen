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
import type { OfferItem } from "@/lib/validation/add-offer";

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
		...timestamps,
	},
	(table) => [index("idx_categories_game_id").on(table.gameId)],
);

// Rarity Types Table

export const rarityTypes = pgTable(
	"rarity_types",
	{
		id: serial("id").primaryKey(),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		name: text("name").notNull(),
		displayName: text("display_name"),
		colorHex: text("color_hex"),
		...timestamps,
	},
	(table) => [index("idx_rarity_types_game_id").on(table.gameId)],
);

// Items Table

export const items = pgTable(
	"items",
	{
		id: serial("id").primaryKey(),
		gameId: integer("game_id")
			.notNull()
			.references(() => games.id, { onDelete: "cascade" }),
		categoryId: integer("category_id")
			.notNull()
			.references(() => categories.id, { onDelete: "cascade" }),
		name: text("name").notNull(),
		description: text("description"),
		imageUrl: text("image_url").notNull(),
		slug: text("slug").notNull().unique(),
		rarityTypeId: integer("rarity_type_id").references(() => rarityTypes.id, {
			onDelete: "set null",
		}),
		...timestamps,
	},
	(table) => [
		index("idx_items_game_id").on(table.gameId),
		index("idx_items_category_id").on(table.categoryId),
		index("idx_items_rarity_type_id").on(table.rarityTypeId),
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
			.references(() => items.id, { onDelete: "cascade" }),
		price: integer("price").notNull(),
		quantity: integer("quantity").default(1),
		age: text("age"),
		status: text("status").notNull().default("active"), // e.g., "active", "sold", "inactive"
		lookingFor: jsonb("looking_for")
			.notNull()
			.default(sql`'[]'::jsonb`)
			.$type<OfferItem[]>(), // What the seller wants in return (optional)
		slug: text("slug").notNull(), // For SEO-friendly URLs
		metadata: jsonb("metadata"),
		...timestamps,
	},
	(table) => [
		index("idx_listings_seller_id").on(table.sellerId),
		index("idx_listings_item_id").on(table.itemId),
		index("idx_listings_status").on(table.status),
		index("idx_listings_slug").on(table.slug), // Add index for slug
	],
);

// Offers Table (Without Message)

export const offers = pgTable(
	"offers",
	{
		id: serial("id").primaryKey(),
		listingId: integer("listing_id")
			.notNull()
			.references(() => listings.id, { onDelete: "cascade" }),
		offererId: text("offerer_id")
			.notNull()
			.references(() => user.id, { onDelete: "cascade" }),
		offeredItems: jsonb("offered_items")
			.notNull()
			.default(sql`'[]'::jsonb`)
			.$type<OfferItem[]>(),
		status: text("status").notNull().default("pending"), // "pending", "accepted", "rejected"
		...timestamps,
	},
	(table) => [
		index("idx_offers_listing_id").on(table.listingId),
		index("idx_offers_offerer_id").on(table.offererId),
		index("idx_offers_status").on(table.status),
	],
);

// User Follows Relationship Table

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

// User Reviews Table

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
		rating: integer("rating").notNull(), // e.g., 1-5
		comment: text("comment"),
		...timestamps,
	},
	(table) => [
		index("idx_user_reviews_reviewer_id").on(table.reviewerId),
		index("idx_user_reviews_target_user_id").on(table.targetUserId),
	],
);

// Relations

export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	listings: many(listings, { relationName: "seller" }),
	offersReceived: many(offers), // Offers on user's listings - simplified
	offersMade: many(offers, { relationName: "offerer" }), // Offers made by the user
	followers: many(userFollows, { relationName: "following" }), // Users following this user
	following: many(userFollows, { relationName: "followers" }), // Users this user is following
	receivedReviews: many(userReviews, { relationName: "receivedReviews" }),
	givenReviews: many(userReviews, { relationName: "givenReviews" }),
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
	items: many(items), // While not directly linked, items have a rarity type
}));

export const itemsRelations = relations(items, ({ one, many }) => ({
	game: one(games, { fields: [items.gameId], references: [games.id] }),
	category: one(categories, {
		fields: [items.categoryId],
		references: [categories.id],
	}),
	listings: many(listings),
	rarityType: one(rarityTypes, {
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
	offers: many(offers),
}));

// Corrected offersRelations
export const offersRelations = relations(offers, ({ one }) => ({
	listing: one(listings, {
		fields: [offers.listingId],
		references: [listings.id],
	}),
	offerer: one(user, {
		fields: [offers.offererId],
		references: [user.id],
		relationName: "offerer",
	}),
}));
