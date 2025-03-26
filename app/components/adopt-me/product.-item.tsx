import React from "react";
import { Button } from "../ui/button";
import {
	ArrowLeft,
	ArrowRight,
	ExternalLink,
	Flag,
	Heart,
	Share2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function ProductItem() {
	return (
		<div className="border rounded-lg p-4 sticky top-4 h-fit">
			{/* Main img */}
			<div className="aspect-square bg-zinc-800 rounded-md mb-4 relative overflow-hidden">
				<img
					src="/placeholder.svg?height=400&width=400"
					alt="Frost Dragon"
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
			</div>

			{/* Product ID */}
			<div className="text-xs text-gray-500 mb-4 text-center">
				Product ID: 1276977709
			</div>

			{/* Quick Stats */}
			<div className="border rounded-md p-3 mb-4">
				<h3 className="font-medium mb-2">Quick Stats</h3>
				<div className="grid grid-cols-2 gap-2 text-sm">
					<div className="flex justify-between">
						<span className="text-gray-500">Rarity:</span>
						<span className="font-medium">Legendary</span>
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
						<span className="font-medium text-green-600">High</span>
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
