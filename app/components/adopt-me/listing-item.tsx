import type { listings } from "../../../db/schema";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Loader, Star } from "lucide-react";
import { ListingFilter } from "./listing-filter";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { getPaginatedListing } from "@/routes/adoptme/product/$productId";
import InfiniteScrollContainer from "../infinte-scroll-container";

export type listingType = typeof listings.$inferSelect & {
	metadata: Record<string, boolean> | null;
	seller: {
		userName: string;
		tradeCount: number;
		reputationScore: number;
		image: string;
	};
};

export function ListingItem({
	listings: initialListings,
	nextId: initialNextId,
	onMakeOffer,
}: {
	listings: listingType[];
	nextId: number;
	onMakeOffer: (items: listingType) => void;
}) {
	const { productId } = useParams({
		from: "/adoptme/product/$productId",
	});

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		isFetching,
		isError,
		error,
	} = useInfiniteQuery({
		queryKey: ["listings", productId],
		queryFn: async ({ pageParam }) => {
			const result = await getPaginatedListing({
				data: { nextId: pageParam, slug: productId },
			});
			return result;
		},
		getNextPageParam: (lastPage) => lastPage.nextCursor,
		initialPageParam: initialNextId,
		initialData: {
			pages: [{ nextListings: initialListings, nextCursor: initialNextId }],
			pageParams: [initialNextId],
		},
	});

	console.log(data);

	return (
		<div className="border rounded-lg p-4 bg-zinc-800 text-white">
			{/* Product Title & Stats */}
			<div className="mb-6">
				<h1 className="text-xl font-semibold mb-2">Available Listings</h1>
				<div className="flex items-center justify-between mb-4">
					{/* <ListingFilter /> */}
				</div>

				{/* Listings */}
				<InfiniteScrollContainer
					onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
					className="grid grid-cols-1 md:grid-cols-2 gap-4"
				>
					{data?.pages
						.flatMap((page) => page.nextListings)
						.map((listing) => (
							<ListingCard
								key={listing.id}
								listing={listing}
								onMakeOffer={onMakeOffer}
							/>
						))}
					{isFetchingNextPage && hasNextPage && (
						<div className="w-full col-span-full">
							<Loader className="animate-spin mx-auto size-8" />
						</div>
					)}
					{isError && (
						<div className="w-full col-span-full">Error loading listings</div>
					)}
				</InfiniteScrollContainer>
			</div>
		</div>
	);
}

type MetadataBadgeProp = {
	metadata: Record<string, boolean> | null;
};
const MetadataBadge: React.FC<MetadataBadgeProp> = ({ metadata }) => {
	if (!metadata) {
		return null;
	}

	const badges: React.ReactNode[] = [];
	for (const key in metadata) {
		if (metadata[key]) {
			const parts = key.split("is").filter((part) => part !== "");
			for (const part of parts) {
				badges.push(
					<Badge
						key={part}
						className="bg-blue-500 hover:bg-blue-600 text-white text-[10px] px-1 py-0 mr-1"
					>
						{part}
					</Badge>,
				);
			}
		}
	}

	return <>{badges}</>;
};

const ListingCard: React.FC<{
	listing: listingType;
	onMakeOffer: (items: listingType) => void;
}> = ({ listing, onMakeOffer }) => {
	return (
		<div
			key={listing.id}
			className="border rounded-lg p-3 hover:border-pink-500 transition-colors bg-zinc-900"
		>
			<div className="flex items-center justify-between mb-2">
				<div className="flex items-center gap-2">
					<div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden">
						<img
							src="/placeholder.svg?height=40&width=40"
							alt={"user"}
							width={40}
							height={40}
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h3 className="font-medium text-sm">Item name + ({listing.age})</h3>
						<div className="flex items-center gap-1 mt-0.5">
							<MetadataBadge metadata={listing.metadata} />
						</div>
					</div>
				</div>
				<Button
					size="sm"
					className="bg-pink-500 hover:bg-pink-600 text-white text-xs h-7"
					onClick={() => onMakeOffer(listing)}
				>
					Make Offer
				</Button>
			</div>

			<div className="mb-2 text-xs text-zinc-400 flex items-center gap-1">
				<span className="font-medium text-zinc-300">
					{listing.seller.userName}
				</span>
				{listing.status === "Online" ? (
					<span className="text-green-500">• Online</span>
				) : (
					<span>• Last seen {listing.status.replace("Last seen ", "")}</span>
				)}
			</div>

			<div className="mb-1 text-xs text-zinc-500 flex items-center gap-1">
				<Star className="w-3 h-3 text-yellow-400" />
				<span>user review </span>
				<span className="text-zinc-400">
					({listing.seller.reputationScore})
				</span>
				<span className="ml-2">Trades:</span>
				<span className="font-medium text-zinc-300">
					{listing.seller.tradeCount}
				</span>
			</div>

			{listing.lookingFor && listing.lookingFor.length > 0 && (
				<div className="mt-1">
					<span className="text-xs text-zinc-400 block mb-1">Looking For:</span>
					<div className="flex flex-wrap gap-1">
						{listing.lookingFor.map((lf) => (
							<Badge
								key={lf}
								variant="outline"
								className="border-zinc-600 text-zinc-400 text-[10px] px-1 py-0"
							>
								{lf}
							</Badge>
						))}
					</div>
				</div>
			)}

			<div className="text-xs text-zinc-500 mt-2">
				Listed {listing.createdAt.toLocaleDateString()}
			</div>
		</div>
	);
};
