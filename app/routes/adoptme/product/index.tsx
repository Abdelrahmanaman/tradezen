import SearchForm from "@/components/adopt-me/search";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import GameItem from "@/components/adopt-me/game-item";
import { db } from "../../../../db/db";

const getGameItems = createServerFn({ method: "GET" }).handler(async () => {
	const gameItems = await db.query.items.findMany({
		where: (items, { eq }) => eq(items.gameId, 1),
	});
	return gameItems as GameItemType[];
});

export const Route = createFileRoute("/adoptme/product/")({
	component: RouteComponent,
	loader: async () => {
		const items = await getGameItems();
		return { items };
	},
});

function RouteComponent() {
	const { items } = Route.useLoaderData();

	return (
		<section className="flex md:flex-nowrap flex-wrap">
			<SearchForm />
			<div className="grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow">
				{items.map((item) => (
					<GameItem game={item} key={item.name} />
				))}
			</div>
			<Outlet />
		</section>
	);
}

export type GameItemType = {
	id: number;
	name: string;
	createdAt: string;
	description: string | null;
	isActive: boolean | null;
	gameId: number;
	categoryId: number;
	imageUrl: string;
	slug: string;
	suggestedPrice: number | null;
	metadata: Record<string, string> | null;
};
