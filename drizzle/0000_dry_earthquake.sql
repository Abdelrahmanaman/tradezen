CREATE TABLE `account` (
	`id` text PRIMARY KEY NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`password` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`game_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`sort_order` integer DEFAULT 0,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_categories_game_id` ON `categories` (`game_id`);--> statement-breakpoint
CREATE TABLE `coin_cashouts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`coins_amount` integer NOT NULL,
	`cash_amount` real NOT NULL,
	`payment_method` text NOT NULL,
	`payment_details` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`processed_at` text,
	`notes` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_coin_cashouts_user_id` ON `coin_cashouts` (`user_id`);--> statement-breakpoint
CREATE INDEX `idx_coin_cashouts_status` ON `coin_cashouts` (`status`);--> statement-breakpoint
CREATE TABLE `coin_purchases` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`coins_amount` integer NOT NULL,
	`cash_amount` real NOT NULL,
	`payment_method` text NOT NULL,
	`payment_reference` text,
	`status` text DEFAULT 'completed' NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_coin_purchases_user_id` ON `coin_purchases` (`user_id`);--> statement-breakpoint
CREATE TABLE `games` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`logo_url` text,
	`is_active` integer DEFAULT true,
	`sort_order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE UNIQUE INDEX `games_name_unique` ON `games` (`name`);--> statement-breakpoint
CREATE TABLE `inventory` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`item_id` integer NOT NULL,
	`user_specified_rarity_id` integer,
	`quantity` integer DEFAULT 1 NOT NULL,
	`acquired` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`notes` text,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`user_specified_rarity_id`) REFERENCES `rarity_types`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_inventory_user_id` ON `inventory` (`user_id`);--> statement-breakpoint
CREATE INDEX `idx_inventory_item_id` ON `inventory` (`item_id`);--> statement-breakpoint
CREATE INDEX `idx_inventory_user_specified_rarity_id` ON `inventory` (`user_specified_rarity_id`);--> statement-breakpoint
CREATE TABLE `items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`game_id` integer NOT NULL,
	`category_id` integer NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`image_url` text NOT NULL,
	`suggested_price` integer,
	`is_active` integer DEFAULT true,
	`metadata` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE restrict
);
--> statement-breakpoint
CREATE INDEX `idx_items_game_id` ON `items` (`game_id`);--> statement-breakpoint
CREATE INDEX `idx_items_category_id` ON `items` (`category_id`);--> statement-breakpoint
CREATE INDEX `idx_items_name` ON `items` (`name`);--> statement-breakpoint
CREATE TABLE `listings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`seller_id` text NOT NULL,
	`item_id` integer NOT NULL,
	`inventory_id` integer NOT NULL,
	`price` integer NOT NULL,
	`quantity` integer DEFAULT 1,
	`listing_rarity_id` integer,
	`status` text DEFAULT 'active' NOT NULL,
	`featured` integer DEFAULT false,
	`expires_at` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`metadata` text,
	FOREIGN KEY (`seller_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`inventory_id`) REFERENCES `inventory`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`listing_rarity_id`) REFERENCES `rarity_types`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_listings_status` ON `listings` (`status`);--> statement-breakpoint
CREATE INDEX `idx_listings_seller_id` ON `listings` (`seller_id`);--> statement-breakpoint
CREATE INDEX `idx_listings_item_id` ON `listings` (`item_id`);--> statement-breakpoint
CREATE INDEX `idx_listings_listing_rarity_id` ON `listings` (`listing_rarity_id`);--> statement-breakpoint
CREATE INDEX `idx_listings_featured` ON `listings` (`featured`);--> statement-breakpoint
CREATE TABLE `price_history` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` integer NOT NULL,
	`average_price` integer NOT NULL,
	`volume` integer NOT NULL,
	`date` text NOT NULL,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_price_history_item_id` ON `price_history` (`item_id`);--> statement-breakpoint
CREATE INDEX `idx_price_history_date` ON `price_history` (`date`);--> statement-breakpoint
CREATE TABLE `rarity_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`game_id` integer NOT NULL,
	`name` text NOT NULL,
	`display_name` text,
	`color_hex` text,
	`sort_order` integer DEFAULT 0,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_rarity_types_game_id` ON `rarity_types` (`game_id`);--> statement-breakpoint
CREATE INDEX `idx_rarity_types_unique` ON `rarity_types` (`game_id`,`name`);--> statement-breakpoint
CREATE TABLE `search_history` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`search_query` text NOT NULL,
	`game_id` integer,
	`category_id` integer,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_search_history_user_id` ON `search_history` (`user_id`);--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE TABLE `trade_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`trade_id` integer NOT NULL,
	`inventory_id` integer NOT NULL,
	`item_id` integer NOT NULL,
	`user_id` text NOT NULL,
	`quantity` integer DEFAULT 1,
	FOREIGN KEY (`trade_id`) REFERENCES `trades`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`inventory_id`) REFERENCES `inventory`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_trade_items_trade_id` ON `trade_items` (`trade_id`);--> statement-breakpoint
CREATE INDEX `idx_trade_items_user_id` ON `trade_items` (`user_id`);--> statement-breakpoint
CREATE TABLE `trades` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`initiator_id` text NOT NULL,
	`receiver_id` text NOT NULL,
	`initiator_coins_offered` integer DEFAULT 0,
	`receiver_coins_requested` integer DEFAULT 0,
	`status` text DEFAULT 'pending' NOT NULL,
	`message` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`completed_at` text,
	FOREIGN KEY (`initiator_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`receiver_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_trades_initiator_id` ON `trades` (`initiator_id`);--> statement-breakpoint
CREATE INDEX `idx_trades_receiver_id` ON `trades` (`receiver_id`);--> statement-breakpoint
CREATE INDEX `idx_trades_status` ON `trades` (`status`);--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`listing_id` integer,
	`buyer_id` text NOT NULL,
	`seller_id` text NOT NULL,
	`item_id` integer NOT NULL,
	`price` integer NOT NULL,
	`quantity` integer DEFAULT 1 NOT NULL,
	`transaction_type` text NOT NULL,
	`timestamp` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`listing_id`) REFERENCES `listings`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`buyer_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`seller_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE restrict
);
--> statement-breakpoint
CREATE INDEX `idx_transactions_buyer_id` ON `transactions` (`buyer_id`);--> statement-breakpoint
CREATE INDEX `idx_transactions_seller_id` ON `transactions` (`seller_id`);--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`email` text NOT NULL,
	`email_verified` integer NOT NULL,
	`image` text,
	`user_name` text NOT NULL,
	`total_coins` integer DEFAULT 0 NOT NULL,
	`paypal_email` text,
	`preferred_payment_method` text,
	`bio` text,
	`reputation_score` real DEFAULT 0,
	`followers_count` integer DEFAULT 0 NOT NULL,
	`following_count` integer DEFAULT 0 NOT NULL,
	`trade_count` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_user_name_unique` ON `user` (`user_name`);--> statement-breakpoint
CREATE TABLE `user_follows` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`follower_id` text NOT NULL,
	`following_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`follower_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`following_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_user_follows_unique` ON `user_follows` (`follower_id`,`following_id`);--> statement-breakpoint
CREATE INDEX `idx_user_follows_follower_id` ON `user_follows` (`follower_id`);--> statement-breakpoint
CREATE INDEX `idx_user_follows_following_id` ON `user_follows` (`following_id`);--> statement-breakpoint
CREATE TABLE `user_reviews` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`reviewer_id` text NOT NULL,
	`target_user_id` text NOT NULL,
	`trade_id` integer,
	`rating` integer NOT NULL,
	`comment` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`is_visible` integer DEFAULT true NOT NULL,
	FOREIGN KEY (`reviewer_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`target_user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`trade_id`) REFERENCES `trades`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_user_reviews_reviewer_id` ON `user_reviews` (`reviewer_id`);--> statement-breakpoint
CREATE INDEX `idx_user_reviews_target_user_id` ON `user_reviews` (`target_user_id`);--> statement-breakpoint
CREATE INDEX `idx_user_reviews_unique_per_trade` ON `user_reviews` (`reviewer_id`,`target_user_id`,`trade_id`);--> statement-breakpoint
CREATE TABLE `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
