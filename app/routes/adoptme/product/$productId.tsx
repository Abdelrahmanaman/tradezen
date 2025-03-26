import { createFileRoute } from "@tanstack/react-router";
import { db } from "../../../../db/db";
import ProductItem from "@/components/adopt-me/product.-item";
import { ListingItem } from "@/components/adopt-me/listing-item";

async function getGameItem(slug: string) {
	const item = await db.query.items.findFirst({
		where: (item, { eq }) => eq(item.slug, slug),
	});
	return item;
}
export const Route = createFileRoute("/adoptme/product/$productId")({
	component: RouteComponent,
	loader: async ({ params: { productId } }) => {},
});

function RouteComponent() {
	const { productId } = Route.useParams();
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
