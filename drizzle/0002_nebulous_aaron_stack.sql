ALTER TABLE `user` ADD `followers_count` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `user` ADD `following_count` integer DEFAULT 0 NOT NULL;