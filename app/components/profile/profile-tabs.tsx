import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarIcon } from "lucide-react";
import ListingCard from "../listing-card";

const recentReviews = [
	{
		id: 1,
		user: "EpicGamer99",
		avatar: "/placeholder.svg?height=40&width=40",
		rating: 5,
		comment:
			"Excellent trader! Fast and reliable. Got my rare Diablo 2 items exactly as described.",
		date: "2 days ago",
		helpful: 12,
	},
	{
		id: 2,
		user: "WoWCollector",
		avatar: "/placeholder.svg?height=40&width=40",
		rating: 5,
		comment:
			"Great communication and fair prices. Would definitely trade again!",
		date: "1 week ago",
		helpful: 8,
	},
	{
		id: 3,
		user: "GamerPro42",
		avatar: "/placeholder.svg?height=40&width=40",
		rating: 4,
		comment:
			"Good trader overall. Slight delay in delivery but items were as promised.",
		date: "2 weeks ago",
		helpful: 5,
	},
];

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

const renderStars = (count: number, size = 4) => {
	return Array(5)
		.fill(0)
		.map((_, i) => (
			<StarIcon
				key={count + i}
				className={`w-${size} h-${size} ${i < count ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
			/>
		));
};

export default function PublicProfileTabs() {
	return (
		<Tabs defaultValue="listings" className="space-y-10  ">
			<TabsList className="grid w-fit grid-cols-4 max-w-2xl bg-transparent">
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="listings">
					Active Listings
				</TabsTrigger>
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="past-trades">
					Wishlists
				</TabsTrigger>
				<TabsTrigger className="sm:p-4 font-semibold pb-2 " value="reviews">
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
												<StarIcon key={`${review.id}-${i}`} className="w-4 h-4 text-yellow-400" />
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
			<TabsContent value="reviews">
				<Card>
					<CardHeader>
						<CardTitle>Recent Reviews</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-4">
							{recentReviews.map((review) => (
								<li key={review.id} className="border-b pb-2 last:border-b-0">
									<div className="flex justify-between items-center">
										<span className="font-semibold">{review.user}</span>
										<div className="flex">
											{[...Array(review.rating)].map((_, i) => (
												<StarIcon key={`${review.id}-${i}`} className="w-4 h-4 text-yellow-400" />
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
