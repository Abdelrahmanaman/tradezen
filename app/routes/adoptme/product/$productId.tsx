import { createFileRoute } from "@tanstack/react-router";
import { db } from "../../../../db/db";

import type { GameItemType } from ".";
import { createServerFn } from "@tanstack/react-start";
import { ListingItem } from "@/components/adopt-me/listing-item";
import ProductItem from "@/components/adopt-me/product.-item";

const getGameItem = createServerFn({ method: "GET" })
	.validator((slug: string): { slug: string } => {
		if (typeof slug !== "string") {
			throw new Error("Invalid slug");
		}
		return { slug } as { slug: string };
	})
	.handler(async ({ data }) => {
		const item = await db.query.items.findFirst({
			where: (items, { eq }) => eq(items.slug, data.slug),
		});
		return item as GameItemType;
	});

export const Route = createFileRoute("/adoptme/product/$productId")({
	component: RouteComponent,
	loader: async ({ params: { productId } }) => {
		const item = await getGameItem({ data: productId });
		return { item };
	},
});

function RouteComponent() {
	const { item } = Route.useLoaderData();
	console.log(item);
	return (
		<section className="container px-4 mb-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="md:col-span-1">
					<ProductItem />
				</div>
				<div className="md:col-span-2">
					<ListingItem />
				</div>
			</div>
		</section>
	);
}
