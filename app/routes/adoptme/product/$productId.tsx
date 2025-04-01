import { createFileRoute } from "@tanstack/react-router";
import { db } from "../../../../db/db";
import { createServerFn } from "@tanstack/react-start";
import { ListingItem } from "@/components/adopt-me/listing-item";
import ProductItem from "@/components/adopt-me/product.-item";
import type { listings } from "../../../../db/schema";
import type { GameItemType } from ".";

export type GameItemWithListingsType = GameItemType & {
	listings: (typeof listings.$inferSelect & {
		metadata: Record<string, boolean> | null;
	})[];
};

export const getAllGames = createServerFn({ method: "GET" }).handler(
	async () => {
		const items = await db.query.items.findMany({
			where: (items, { eq }) => eq(items.gameId, 1),
		});
		return items as GameItemType[];
	},
);

const getGameItem = createServerFn({ method: "GET" })
	.validator((slug: string): { slug: string } => {
		if (typeof slug !== "string") {
			throw new Error("Invalid slug");
		}
		return { slug } as { slug: string };
	})
	.handler(async ({ data }) => {
		const result = await db.query.items.findFirst({
			where: (items, { eq }) => eq(items.slug, data.slug),
			with: {
				listings: true,
			},
		});
		if (!result) {
			throw new Error("Item not found");
		}

		const { listings, ...item } = result;

		return { listings, ...item } as GameItemWithListingsType;
	});

export const searchItems = createServerFn({ method: "GET" })
	.validator((query: string): { query: string } => {
		if (typeof query !== "string") {
			throw new Error("Invalid data");
		}
		return { query } as { query: string };
	})
	.handler(async ({ data: { query } }) => {
		// await new Promise((resolve) => setTimeout(resolve, 500));
		const results = await db.query.items.findMany({
			where: (items, { like }) => like(items.name, `%${query}%`),
			columns: {
				id: true,
				name: true,
			},
			limit: 5,
		});

		return results as GameItemType[];
	});

export const Route = createFileRoute("/adoptme/product/$productId")({
	component: RouteComponent,
	loader: async ({ params: { productId } }) => {
		const item = await getGameItem({ data: productId });
		return { item };
	},
});

function RouteComponent() {
	const { item } = Route.useLoaderData() as { item: GameItemType };
	console.log(item);
	return (
		<section className="container px-4 mb-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="md:col-span-1">
					<ProductItem item={item} />
				</div>
				<div className="md:col-span-2">
					<ListingItem />
				</div>
			</div>
		</section>
	);
}
