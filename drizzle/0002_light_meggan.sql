CREATE TABLE `listing_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`listing_id` integer NOT NULL,
	`item_id` integer NOT NULL,
	`quantity` integer DEFAULT 1,
	`listing_rarity_id` integer,
	`metadata` text,
	FOREIGN KEY (`listing_id`) REFERENCES `listings`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON UPDATE no action ON DELETE restrict,
	FOREIGN KEY (`listing_rarity_id`) REFERENCES `rarity_types`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `idx_listing_items_listing_id` ON `listing_items` (`listing_id`);--> statement-breakpoint
CREATE INDEX `idx_listing_items_item_id` ON `listing_items` (`item_id`);--> statement-breakpoint
CREATE INDEX `idx_listing_items_rarity_id` ON `listing_items` (`listing_rarity_id`);--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_listings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`seller_id` text NOT NULL,
	`price` integer NOT NULL,
	`quantity` integer DEFAULT 1,
	`age` text,
	`listing_rarity_id` integer,
	`status` text DEFAULT 'active' NOT NULL,
	`featured` integer DEFAULT false,
	`expires_at` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`metadata` text,
	FOREIGN KEY (`seller_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`listing_rarity_id`) REFERENCES `rarity_types`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_listings`("id", "seller_id", "price", "quantity", "age", "listing_rarity_id", "status", "featured", "expires_at", "created_at", "updated_at", "metadata") SELECT "id", "seller_id", "price", "quantity", "age", "listing_rarity_id", "status", "featured", "expires_at", "created_at", "updated_at", "metadata" FROM `listings`;--> statement-breakpoint
DROP TABLE `listings`;--> statement-breakpoint
ALTER TABLE `__new_listings` RENAME TO `listings`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE INDEX `idx_listings_status` ON `listings` (`status`);--> statement-breakpoint
CREATE INDEX `idx_listings_seller_id` ON `listings` (`seller_id`);--> statement-breakpoint
CREATE INDEX `idx_listings_listing_rarity_id` ON `listings` (`listing_rarity_id`);--> statement-breakpoint
CREATE INDEX `idx_listings_featured` ON `listings` (`featured`);