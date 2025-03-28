// app/routes/index.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { db } from "../../db/db";

const getGames = createServerFn({ method: "GET" }).handler(async () => {
	const games = await db.query.games.findMany();
	return games;
});
export const Route = createFileRoute("/")({
	component: Home,
	loader: async () => {
		const games = await getGames();
		return { games };
	},
});

function Home() {
	const { games } = Route.useLoaderData();
	return (
		<section className="flex	 md:flex-nowrap flex-wrap">
			<div className="grid grid-cols-1 bg-black md:grid-cols-4 gap-4 grow">
				{games.map((game) => (
					<div
						key={game.id}
						className="bg-zinc-900 p-2 hover:bg-amber-700 relative isolate"
					>
						<h2>
							<Link to={"/adoptme"} className="hover:text-red-500">
								<span className=" absolute inset-0 " />
								{game.name}
							</Link>
						</h2>
						<p>{game.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
