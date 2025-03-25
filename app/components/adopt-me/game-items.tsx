import React from "react";
import type { items } from "../../../db/schema";

type game = typeof items.$inferSelect;

export default function GameItems({ item }: { item: game }) {
	return (
		<section className="bg-zinc-800 border max-w-44">
			<img
				className="size-40 border"
				src={item.imageUrl}
				alt={`${item.name}`}
			/>
			<h1>{item.name}</h1>
		</section>
	);
}
