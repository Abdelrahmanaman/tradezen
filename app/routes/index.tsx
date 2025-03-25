// app/routes/index.tsx
import SearchForm from "@/components/adopt-me/search";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import ListingCard from "@/components/adopt-me/listings";
import { createServerFn } from "@tanstack/react-start";
import { db } from "../../db/db";
import GameItems from "@/components/adopt-me/game-items";

interface GameItem {
	id: number;
	name: string;
	createdAt: string;
	description: string | null;
	isActive: boolean | null;
	gameId: number;
	categoryId: number;
	imageUrl: string;
	suggestedPrice: number | null;
	metadata: Record<string, string> | null; // or a more specific object type if you know the structure
}

const getGameItems = createServerFn({ method: "GET" }).handler(async () => {
	const gameItems = await db.query.items.findMany({
		where: (items, { eq }) => eq(items.gameId, 1),
	});
	return gameItems as GameItem[];
});
export const Route = createFileRoute("/")({
	component: Home,
	loader: async ({ context }) => {
		const items = await getGameItems();
		return { items };
	},
});

function Home() {
	const { items } = Route.useLoaderData();
	console.log(items);
	return (
		<section className="flex ">
			<SearchForm />
			{/* <ListingCard /> */}
			<div className="grid grid-cols-4 gap-y-4 grow">
				{items.map((item) => (
					<GameItems item={item} key={item.name} />
				))}
			</div>
		</section>
	);
}
