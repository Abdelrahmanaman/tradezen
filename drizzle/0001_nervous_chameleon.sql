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
ALTER TABLE `user` ADD `bio` text;--> statement-breakpoint
ALTER TABLE `user` ADD `reputation_score` real DEFAULT 0;