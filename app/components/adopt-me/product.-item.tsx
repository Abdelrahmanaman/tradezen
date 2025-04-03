import { Button } from "../ui/button";
import { ExternalLink, Flag, Heart, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import AddListing from "./add-listing";
import type { GameItemType } from "@/routes/adoptme/product";

export default function ProductItem({ item }: { item: GameItemType }) {
	return (
		<div className="border rounded-lg p-4 sticky top-4 h-fit">
			{/* Main img */}
			<div className="aspect-square bg-zinc-800 rounded-md mb-4 relative overflow-hidden">
				<img
					src={item.imageUrl}
					alt={item.name}
					width={400}
					height={400}
					className="w-full h-full object-contain"
				/>
			</div>

			{/* Actions */}
			<div className="flex items-center justify-between mb-4">
				<Button variant="outline" size="sm" className="text-xs">
					<Heart className="w-3 h-3 mr-1" />
					Favorite
				</Button>
				<Button variant="outline" size="sm" className="text-xs">
					<Share2 className="w-3 h-3 mr-1" />
					Share
				</Button>
				<Button variant="outline" size="sm" className="text-xs">
					<Flag className="w-3 h-3 mr-1" />
					Report
				</Button>
				<AddListing itemId={item.id} />
			</div>

			{/* Product ID */}
			<div className="text-xs text-gray-500 mb-4 text-left">
				<span>Product ID: {item.id}</span>
				<p>{item.description}</p>
			</div>

			{/* Quick Stats */}
			<div className="border rounded-md p-3 mb-4">
				<h3 className="font-medium mb-2">Quick Stats</h3>
				<div className="grid grid-cols-2 gap-2 text-sm">
					<div className="flex justify-between">
						<span className="text-gray-500">Rarity:</span>
						<span className="font-medium">{item.rarityType?.name}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-500">Origin:</span>
						<span className="font-medium">Winter 2019</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-500">Tradable:</span>
						<span className="font-medium">Yes</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-500">Value:</span>
						<span className="font-medium text-green-600">
							{item.suggestedPrice}
						</span>
					</div>
				</div>
			</div>

			{/* Value Trend */}
			<div className="border rounded-md p-3">
				<div className="flex items-center justify-between mb-2">
					<h3 className="font-medium">Value Trend</h3>
					<Link
						to="/"
						className="text-xs text-blue-600 hover:underline flex items-center"
					>
						<span>View Full Chart</span>
						<ExternalLink className="w-3 h-3 ml-1" />
					</Link>
				</div>
				<div className="h-24 bg-zinc-800 rounded-md" />
			</div>
		</div>
	);
}
