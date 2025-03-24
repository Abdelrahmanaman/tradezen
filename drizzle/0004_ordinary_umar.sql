CREATE TABLE `enhancement_types` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`game_id` integer NOT NULL,
	`name` text NOT NULL,
	`display_name` text,
	`sort_order` integer DEFAULT 0,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_enhancement_types_game_id` ON `enhancement_types` (`game_id`);--> statement-breakpoint
ALTER TABLE `items` ADD `enhancement_id` integer REFERENCES enhancement_types(id);--> statement-breakpoint
CREATE INDEX `idx_items_enhancement_id` ON `items` (`enhancement_id`);