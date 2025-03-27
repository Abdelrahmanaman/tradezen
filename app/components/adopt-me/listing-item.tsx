import React from "react";
import { Filter } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Star } from "lucide-react"; // Import the Star icon

import { ListingFilter } from "./listing-filter";

export function ListingItem() {
	const listingsDataWithLF = [
		{
			name: "Frost Dragon (Full Grown)",
			potions: ["FR"],
			rarity: "Neon",
			seller: "DragonTrader123",
			status: "Online",
			listedAgo: "2 hours ago",
			lookingFor: [
				{ name: "Shadow Dragon", quantity: 1 },
				{ name: "Good Adds", notes: "Preferably legendaries" },
			],
			rating: 4.8,
			ratingCount: 155,
			tradeCount: 320,
		},
		{
			name: "Frost Dragon (Teen)",
			potions: ["FR"],
			seller: "FrostCollector",
			status: "Last seen 1d ago",
			listedAgo: "1 day ago",
			lookingFor: [{ name: "Neon Unicorn", quantity: 1 }],
			rating: 4.5,
			ratingCount: 88,
			tradeCount: 185,
		},
		{
			name: "Frost Dragon (Full Grown)",
			potions: ["FR"],
			rarity: "Mega Neon",
			seller: "MegaPetTrader",
			status: "Online",
			listedAgo: "5 hours ago",
			lookingFor: [{ name: "Offers Welcome", notes: "Looking for upgrades" }],
			rating: 4.9,
			ratingCount: 212,
			tradeCount: 450,
		},
		{
			name: "Frost Dragon (Post-Teen)",
			potions: ["No Potion"],
			seller: "RarePetDealer",
			status: "Last seen 3h ago",
			listedAgo: "3 days ago",
			lookingFor: [{ name: "High Tier Legendary", quantity: 1 }],
			rating: 4.2,
			ratingCount: 55,
			tradeCount: 110,
		},
		{
			name: "Frost Dragon (Newborn)",
			potions: ["FR"],
			seller: "AdoptMeFan2010",
			status: "Online",
			listedAgo: "12 hours ago",
			lookingFor: [{ name: "FR Griffin", quantity: 1 }],
			rating: 4.6,
			ratingCount: 120,
			tradeCount: 250,
		},
		{
			name: "Frost Dragon (Full Grown)",
			potions: ["Fly"],
			seller: "TradeMasterX",
			status: "Online",
			listedAgo: "8 hours ago",
			lookingFor: [{ name: "Bat Dragon", quantity: 1 }],
			rating: 4.7,
			ratingCount: 180,
			tradeCount: 380,
		},
	];

	return (
		<div className="border rounded-lg p-4 bg-zinc-800 text-white">
			{/* Product Title & Stats */}
			<div className="mb-6">
				<h1 className="text-xl font-semibold mb-2">Available Listings</h1>
				<div className="flex items-center justify-between mb-4">
					{/* <ListingFilter /> */}
				</div>

				{/* Listings */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{listingsDataWithLF.map((listing) => (
						<div
							key={listing.name}
							className="border rounded-lg p-3 hover:border-pink-500 transition-colors bg-zinc-900"
						>
							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center gap-2">
									<div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden">
										<img
											src="/placeholder.svg?height=40&width=40"
											alt={listing.name}
											width={40}
											height={40}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<h3 className="font-medium text-sm">{listing.name}</h3>
										<div className="flex items-center gap-1 mt-0.5">
											{listing.potions?.map((potion) => (
												<Badge
													key={potion}
													className="bg-blue-500 hover:bg-blue-600 text-white text-[10px] px-1 py-0"
												>
													{potion}
												</Badge>
											))}
											{listing.rarity && (
												<Badge className="bg-purple-500 hover:bg-purple-600 text-white text-[10px] px-1 py-0">
													{listing.rarity}
												</Badge>
											)}
										</div>
									</div>
								</div>
								<Button
									size="sm"
									className="bg-pink-500 hover:bg-pink-600 text-white text-xs h-7"
								>
									Make Offer
								</Button>
							</div>

							<div className="mb-2 text-xs text-zinc-400 flex items-center gap-1">
								<span className="font-medium text-zinc-300">
									{listing.seller}
								</span>
								{listing.status === "Online" ? (
									<span className="text-green-500">• Online</span>
								) : (
									<span>
										• Last seen {listing.status.replace("Last seen ", "")}
									</span>
								)}
							</div>

							<div className="mb-1 text-xs text-zinc-500 flex items-center gap-1">
								<Star className="w-3 h-3 text-yellow-400" />
								<span>{listing.rating}</span>
								<span className="text-zinc-400">
									({listing.ratingCount} ratings)
								</span>
								<span className="ml-2">Trades:</span>
								<span className="font-medium text-zinc-300">
									{listing.tradeCount}
								</span>
							</div>

							{listing.lookingFor && listing.lookingFor.length > 0 && (
								<div className="mt-1">
									<span className="text-xs text-zinc-400 block mb-1">
										Looking For:
									</span>
									<div className="flex flex-wrap gap-1">
										{listing.lookingFor.map((lf) => (
											<Badge
												key={lf.name}
												variant="outline"
												className="border-zinc-600 text-zinc-400 text-[10px] px-1 py-0"
											>
												{lf.quantity && lf.quantity > 1
													? `${lf.quantity}x `
													: ""}
												{lf.name}
											</Badge>
										))}
									</div>
								</div>
							)}

							<div className="text-xs text-zinc-500 mt-2">
								Listed {listing.listedAgo}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
