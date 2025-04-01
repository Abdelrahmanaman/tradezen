CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp with time zone,
	"refresh_token_expires_at" timestamp with time zone,
	"scope" text,
	"password" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"game_id" integer NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"sort_order" integer DEFAULT 0,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "coin_cashouts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"coins_amount" integer NOT NULL,
	"cash_amount" real NOT NULL,
	"payment_method" text NOT NULL,
	"payment_details" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"processed_at" timestamp with time zone,
	"notes" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "coin_purchases" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"coins_amount" integer NOT NULL,
	"cash_amount" real NOT NULL,
	"payment_method" text NOT NULL,
	"payment_reference" text,
	"status" text DEFAULT 'completed' NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "games" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"logo_url" text,
	"is_active" boolean DEFAULT true,
	"sort_order" integer DEFAULT 0,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "games_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "items" (
	"id" serial PRIMARY KEY NOT NULL,
	"game_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"image_url" text NOT NULL,
	"suggested_price" integer,
	"is_active" boolean DEFAULT true,
	"slug" text NOT NULL,
	"metadata" jsonb,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "items_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "listings" (
	"id" serial PRIMARY KEY NOT NULL,
	"seller_id" text NOT NULL,
	"item_id" integer NOT NULL,
	"price" integer NOT NULL,
	"quantity" integer DEFAULT 1,
	"age" text,
	"looking_for" text[],
	"listing_rarity_id" integer,
	"status" text DEFAULT 'active' NOT NULL,
	"featured" boolean DEFAULT false,
	"expires_at" timestamp with time zone,
	"metadata" jsonb,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "price_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_id" integer NOT NULL,
	"average_price" integer NOT NULL,
	"volume" integer NOT NULL,
	"date" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "rarity_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"game_id" integer NOT NULL,
	"name" text NOT NULL,
	"display_name" text,
	"color_hex" text,
	"sort_order" integer DEFAULT 0,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "search_history" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"search_query" text NOT NULL,
	"game_id" integer,
	"category_id" integer,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"token" text NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "trade_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"trade_id" integer NOT NULL,
	"item_id" integer NOT NULL,
	"user_id" text NOT NULL,
	"quantity" integer DEFAULT 1,
	"user_specified_rarity_id" integer,
	"metadata" jsonb,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "trades" (
	"id" serial PRIMARY KEY NOT NULL,
	"initiator_id" text NOT NULL,
	"receiver_id" text NOT NULL,
	"initiator_coins_offered" integer DEFAULT 0,
	"receiver_coins_requested" integer DEFAULT 0,
	"status" text DEFAULT 'pending' NOT NULL,
	"message" text,
	"completed_at" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"listing_id" integer,
	"buyer_id" text NOT NULL,
	"seller_id" text NOT NULL,
	"item_id" integer NOT NULL,
	"price" integer NOT NULL,
	"quantity" integer DEFAULT 1 NOT NULL,
	"transaction_type" text NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"email_verified" boolean NOT NULL,
	"image" text,
	"user_name" text NOT NULL,
	"total_coins" integer DEFAULT 0 NOT NULL,
	"paypal_email" text,
	"preferred_payment_method" text,
	"bio" text,
	"reputation_score" real DEFAULT 0,
	"followers_count" integer DEFAULT 0 NOT NULL,
	"following_count" integer DEFAULT 0 NOT NULL,
	"trade_count" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email"),
	CONSTRAINT "user_user_name_unique" UNIQUE("user_name")
);
--> statement-breakpoint
CREATE TABLE "user_follows" (
	"id" serial PRIMARY KEY NOT NULL,
	"follower_id" text NOT NULL,
	"following_id" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"reviewer_id" text NOT NULL,
	"target_user_id" text NOT NULL,
	"trade_id" integer,
	"rating" integer NOT NULL,
	"comment" text,
	"is_visible" boolean DEFAULT true NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "coin_cashouts" ADD CONSTRAINT "coin_cashouts_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "coin_purchases" ADD CONSTRAINT "coin_purchases_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "items" ADD CONSTRAINT "items_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "items" ADD CONSTRAINT "items_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_seller_id_user_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "listings" ADD CONSTRAINT "listings_listing_rarity_id_rarity_types_id_fk" FOREIGN KEY ("listing_rarity_id") REFERENCES "public"."rarity_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rarity_types" ADD CONSTRAINT "rarity_types_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_game_id_games_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."games"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "search_history" ADD CONSTRAINT "search_history_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trade_items" ADD CONSTRAINT "trade_items_trade_id_trades_id_fk" FOREIGN KEY ("trade_id") REFERENCES "public"."trades"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trade_items" ADD CONSTRAINT "trade_items_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trade_items" ADD CONSTRAINT "trade_items_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trade_items" ADD CONSTRAINT "trade_items_user_specified_rarity_id_rarity_types_id_fk" FOREIGN KEY ("user_specified_rarity_id") REFERENCES "public"."rarity_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_initiator_id_user_id_fk" FOREIGN KEY ("initiator_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_receiver_id_user_id_fk" FOREIGN KEY ("receiver_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_listing_id_listings_id_fk" FOREIGN KEY ("listing_id") REFERENCES "public"."listings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_buyer_id_user_id_fk" FOREIGN KEY ("buyer_id") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_seller_id_user_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_item_id_items_id_fk" FOREIGN KEY ("item_id") REFERENCES "public"."items"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_follows" ADD CONSTRAINT "user_follows_follower_id_user_id_fk" FOREIGN KEY ("follower_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_follows" ADD CONSTRAINT "user_follows_following_id_user_id_fk" FOREIGN KEY ("following_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_reviews" ADD CONSTRAINT "user_reviews_reviewer_id_user_id_fk" FOREIGN KEY ("reviewer_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_reviews" ADD CONSTRAINT "user_reviews_target_user_id_user_id_fk" FOREIGN KEY ("target_user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_reviews" ADD CONSTRAINT "user_reviews_trade_id_trades_id_fk" FOREIGN KEY ("trade_id") REFERENCES "public"."trades"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_categories_game_id" ON "categories" USING btree ("game_id");--> statement-breakpoint
CREATE INDEX "idx_coin_cashouts_user_id" ON "coin_cashouts" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_coin_cashouts_status" ON "coin_cashouts" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_coin_purchases_user_id" ON "coin_purchases" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_items_game_id" ON "items" USING btree ("game_id");--> statement-breakpoint
CREATE INDEX "idx_items_category_id" ON "items" USING btree ("category_id");--> statement-breakpoint
CREATE INDEX "idx_items_name" ON "items" USING btree ("name");--> statement-breakpoint
CREATE INDEX "idx_listings_status" ON "listings" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_listings_seller_id" ON "listings" USING btree ("seller_id");--> statement-breakpoint
CREATE INDEX "idx_listings_item_id" ON "listings" USING btree ("item_id");--> statement-breakpoint
CREATE INDEX "idx_listings_listing_rarity_id" ON "listings" USING btree ("listing_rarity_id");--> statement-breakpoint
CREATE INDEX "idx_listings_featured" ON "listings" USING btree ("featured");--> statement-breakpoint
CREATE INDEX "idx_price_history_item_id" ON "price_history" USING btree ("item_id");--> statement-breakpoint
CREATE INDEX "idx_price_history_date" ON "price_history" USING btree ("date");--> statement-breakpoint
CREATE INDEX "idx_rarity_types_game_id" ON "rarity_types" USING btree ("game_id");--> statement-breakpoint
CREATE INDEX "idx_rarity_types_unique" ON "rarity_types" USING btree ("game_id","name");--> statement-breakpoint
CREATE INDEX "idx_search_history_user_id" ON "search_history" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_trade_items_trade_id" ON "trade_items" USING btree ("trade_id");--> statement-breakpoint
CREATE INDEX "idx_trade_items_user_id" ON "trade_items" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_trade_items_rarity_id" ON "trade_items" USING btree ("user_specified_rarity_id");--> statement-breakpoint
CREATE INDEX "idx_trades_initiator_id" ON "trades" USING btree ("initiator_id");--> statement-breakpoint
CREATE INDEX "idx_trades_receiver_id" ON "trades" USING btree ("receiver_id");--> statement-breakpoint
CREATE INDEX "idx_trades_status" ON "trades" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_transactions_buyer_id" ON "transactions" USING btree ("buyer_id");--> statement-breakpoint
CREATE INDEX "idx_transactions_seller_id" ON "transactions" USING btree ("seller_id");--> statement-breakpoint
CREATE INDEX "idx_user_follows_unique" ON "user_follows" USING btree ("follower_id","following_id");--> statement-breakpoint
CREATE INDEX "idx_user_follows_follower_id" ON "user_follows" USING btree ("follower_id");--> statement-breakpoint
CREATE INDEX "idx_user_follows_following_id" ON "user_follows" USING btree ("following_id");--> statement-breakpoint
CREATE INDEX "idx_user_reviews_reviewer_id" ON "user_reviews" USING btree ("reviewer_id");--> statement-breakpoint
CREATE INDEX "idx_user_reviews_target_user_id" ON "user_reviews" USING btree ("target_user_id");--> statement-breakpoint
CREATE INDEX "idx_user_reviews_unique_per_trade" ON "user_reviews" USING btree ("reviewer_id","target_user_id","trade_id");