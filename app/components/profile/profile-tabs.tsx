import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "lucide-react";
import ListingCard from "../listing-card";

export default function PublicProfileTabs() {
	const pastTrades = [
		{
			id: 1,
			user: "Trader1",
			rating: 5,
			comment: "Great trader, fast and reliable!",
		},
		{
			id: 2,
			user: "Gamer2",
			rating: 4,
			comment: "Good communication, smooth trade.",
		},
		{
			id: 3,
			user: "ItemCollector",
			rating: 5,
			comment: "Excellent experience, highly recommended!",
		},
	];
	return (
		<Tabs defaultValue="listings" className="space-y-10  ">
			<TabsList className="grid w-fit grid-cols-2 max-w-2xl bg-transparent">
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="listings">
					Active Listings
				</TabsTrigger>
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="past-trades">
					Wishlists
				</TabsTrigger>
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="past-trades">
					Reviews
				</TabsTrigger>
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="past-trades">
					Past Trades
				</TabsTrigger>
			</TabsList>
			<TabsContent
				className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-cols-1"
				value="listings"
			>
				<ListingCard />
				<ListingCard />
				<ListingCard />
				<ListingCard />
				<ListingCard />
			</TabsContent>
			<TabsContent value="past-trades">
				<Card>
					<CardHeader>
						<CardTitle>Past Trades Reviews</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-4">
							{pastTrades.map((review) => (
								<li key={review.id} className="border-b pb-2 last:border-b-0">
									<div className="flex justify-between items-center">
										<span className="font-semibold">{review.user}</span>
										<div className="flex">
											{[...Array(review.rating)].map((_, i) => (
												<StarIcon key={_} className="w-4 h-4 text-yellow-400" />
											))}
										</div>
									</div>
									<p className="text-sm text-muted-foreground">
										{review.comment}
									</p>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
