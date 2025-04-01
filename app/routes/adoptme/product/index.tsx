import SearchForm from "@/components/adopt-me/search";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import GameItem from "@/components/adopt-me/game-item";
import { db } from "../../../../db/db";
import type { items } from "../../../../db/schema";

export type GameItemType = typeof items.$inferSelect & {
	metadata: Record<string, boolean> | null;
};
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
	console.log(items);

	return (
		<section className="flex md:flex-nowrap flex-wrap">
			<SearchForm />
			<div className="grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow">
				{items.map((item) => (
					<GameItem game={item} key={item.id} />
				))}
			</div>
			<Outlet />
		</section>
	);
}
