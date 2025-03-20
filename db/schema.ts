// src/db/schema.ts
import {
	sqliteTable,
	text,
	integer,
	real,
	index,
} from "drizzle-orm/sqlite-core";
import { relations, sql } from "drizzle-orm";

// Auth Tables (Cleaned up)
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
	totalCoins: integer("total_coins").notNull().default(0), // Nexus Gold (NG)
});

export const session = sqliteTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
	token: text("token").notNull().unique(),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

export const account = sqliteTable("account", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
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
});

// Categories Table
export const categories = sqliteTable("categories", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	gameId: integer("game_id")
		.notNull()
		.references(() => games.id),
	name: text("name").notNull(),
	description: text("description"),
});

// Items Table
export const items = sqliteTable(
	"items",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		categoryId: integer("category_id")
			.notNull()
			.references(() => categories.id),
		name: text("name").notNull(),
		description: text("description"),
		rarity: text("rarity"),
		imageUrl: text("image_url").notNull(),
		ngPrice: integer("ng_price").notNull(), // Suggested price in Nexus Gold (NG)
		metadata: text("metadata", { mode: "json" }),
		createdAt: integer("created_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [
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
			.references(() => items.id, { onDelete: "cascade" }),
		price: integer("price").notNull(),
		quantity: integer("quantity").default(1),
		userSpecifiedRarity: text("user_specified_rarity"),
		status: text("status").notNull().default("active"),
		createdAt: integer("created_at", { mode: "timestamp" })
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
	},
	(table) => [
		index("idx_listings_status").on(table.status),
		index("idx_listings_seller_id").on(table.sellerId),
	],
);

// Trades Table
export const trades = sqliteTable("trades", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	initiatorId: text("initiator_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	receiverId: text("receiver_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	status: text("status").notNull().default("pending"),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

// Trade Items Table
export const tradeItems = sqliteTable("trade_items", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	tradeId: integer("trade_id")
		.notNull()
		.references(() => trades.id, { onDelete: "cascade" }),
	itemId: integer("item_id")
		.notNull()
		.references(() => items.id, { onDelete: "cascade" }),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	quantity: integer("quantity").default(1),
});

// Purchases Table
export const purchases = sqliteTable("purchases", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	ngAmount: integer("ng_amount").notNull(),
	timestamp: integer("timestamp", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

// Cashouts Table
export const cashouts = sqliteTable("cashouts", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	userId: text("user_id")
		.notNull()
		.references(() => user.id, { onDelete: "cascade" }),
	ngAmount: integer("ng_amount").notNull(),
	cashAmount: real("cash_amount").notNull(),
	status: text("status").notNull().default("pending"),
	timestamp: integer("timestamp", { mode: "timestamp" })
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

// Relations (Optional)
export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	purchases: many(purchases),
	cashouts: many(cashouts),
	listings: many(listings),
	initiatedTrades: many(trades, { relationName: "initiator" }),
	receivedTrades: many(trades, { relationName: "receiver" }),
}));

export const itemsRelations = relations(items, ({ one }) => ({
	category: one(categories, {
		fields: [items.categoryId],
		references: [categories.id],
	}),
}));

export const categoriesRelations = relations(categories, ({ one }) => ({
	game: one(games, { fields: [categories.gameId], references: [games.id] }),
}));

export const listingsRelations = relations(listings, ({ one }) => ({
	seller: one(user, { fields: [listings.sellerId], references: [user.id] }),
	item: one(items, { fields: [listings.itemId], references: [items.id] }),
}));

export const tradesRelations = relations(trades, ({ one, many }) => ({
	initiator: one(user, { fields: [trades.initiatorId], references: [user.id] }),
	receiver: one(user, { fields: [trades.receiverId], references: [user.id] }),
	items: many(tradeItems),
}));
