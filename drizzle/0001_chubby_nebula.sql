DROP TABLE `listing_items`;--> statement-breakpoint
ALTER TABLE `listings` ADD `item_id` integer NOT NULL REFERENCES items(id);--> statement-breakpoint
ALTER TABLE `listings` ADD `looking_for` text;--> statement-breakpoint
CREATE INDEX `idx_listings_item_id` ON `listings` (`item_id`);