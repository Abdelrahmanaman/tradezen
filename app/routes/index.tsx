// app/routes/index.tsx
import SearchForm from "@/components/adopt-me/search";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import ListingCard from "@/components/adopt-me/listings";
import { createServerFn } from "@tanstack/react-start";
import { db } from "../../db/db";
import GameItem from "@/components/adopt-me/game-item";

interface GameItemType {
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
	return gameItems as GameItemType[];
});
export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		const items = await getGameItems();
		return { items };
	},
});

function Home() {
	const { items } = Route.useLoaderData();
	return (
		<section className="flex md:flex-nowrap flex-wrap">
			<SearchForm />
			{/* <ListingCard /> */}
			<div className="grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow">
				{items.map((item) => (
					<GameItem game={item} key={item.name} />
				))}
			</div>
		</section>
	);
}
