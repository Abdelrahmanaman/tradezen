import { createFileRoute } from "@tanstack/react-router";
import { db } from "../../../../db/db";
import { createServerFn } from "@tanstack/react-start";
import {
	ListingItem,
	type listingType,
} from "@/components/adopt-me/listing-item";
import ProductItem from "@/components/adopt-me/product.-item";
import type { listings } from "../../../../db/schema";
import type { GameItemType } from ".";
import { and } from "drizzle-orm";
import { MakeOfferForm } from "@/components/adopt-me/make-offer-form";
import { useState } from "react";

export type GameItemWithListingsType = GameItemType & {
	listings: listingType[];
	nextId: number;
	previousId: number;
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
				listings: {
					limit: 10,
					orderBy: (listings, { asc }) => asc(listings.id),
					with: {
						seller: {
							columns: {
								userName: true,
								tradeCount: true,
								reputationScore: true,
								image: true,
							},
						},
					},
				},
				rarityType: true,
			},
		});
		if (!result || !result.listings) {
			throw new Error("Item not found");
		}

		const { listings, ...item } = result;

		const nextId =
			listings.length > 0 ? listings[listings.length - 1].id : null;
		const previousId = listings.length > 0 ? listings[0].id : null;

		return {
			listings,
			...item,
			nextId,
			previousId,
		} as GameItemWithListingsType;
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

export const getPaginatedListing = createServerFn({ method: "GET" })
	.validator(({ nextId, slug }: { nextId: number; slug: string }) => {
		if (typeof nextId !== "number" || typeof slug !== "string") {
			throw new Error("Invalid nextId or slug");
		}
		return { nextId, slug } as { nextId: number; slug: string };
	})
	.handler(async ({ data: { nextId, slug } }) => {
		const pageSize = 10;

		const nextListings = await db.query.listings.findMany({
			where: (fields, { gt, eq }) =>
				and(eq(fields.slug, slug), gt(fields.id, nextId)),
			with: {
				seller: {
					columns: {
						userName: true,
						tradeCount: true,
						reputationScore: true,
						image: true,
					},
				},
			},
			orderBy: (fields, { asc }) => asc(fields.id),
			limit: pageSize,
		});
		const nextCursor =
			nextListings.length >= pageSize
				? nextListings[nextListings.length - 1].id
				: null;
		console.log("Returning cursor:", nextCursor);
		return { nextListings, nextCursor } as {
			nextListings: listingType[];
			nextCursor: number | null;
		};
	});

export const Route = createFileRoute("/adoptme/product/$productId")({
	component: RouteComponent,
	loader: async ({ params: { productId } }) => {
		const { listings, nextId, ...item } = await getGameItem({
			data: productId,
		});
		return { item, listings, nextId };
	},
});

function RouteComponent() {
	const { item, listings, nextId } = Route.useLoaderData();
	const [selectedListing, setSelectedListing] = useState<listingType | null>(
		null,
	);
	return (
		<section className="container px-4 mb-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="md:col-span-1">
					{/* <MakeOfferForm /> */}
					<ProductItem item={item} />
				</div>
				<div className="md:col-span-2">
					<ListingItem
						listings={listings}
						nextId={nextId}
						onMakeOffer={setSelectedListing}
					/>
					{selectedListing && (
						<MakeOfferForm
							listing={selectedListing}
							onClose={() => setSelectedListing(null)}
							open={true}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
