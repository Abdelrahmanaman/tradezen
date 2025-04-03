import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plane, Zap, DogIcon as Horse, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// This would come from your database in a real app
const mockItem = {
	id: 1,
	name: "Legendary Mount",
	description: "A rare and powerful mount",
	image: "/placeholder.svg?height=100&width=100",
};

// Mock user data
const mockUser = {
	id: "user123",
	name: "GameMaster42",
	avatar: "/placeholder.svg?height=40&width=40",
	rating: 4.8,
};

// This would be the actual listing from your database
const mockListing = {
	id: 1,
	sellerId: "user123",
	itemId: 1,
	price: 5000,
	quantity: 1,
	listingRarityId: 3,
	status: "active",
	featured: true,
	createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
	updatedAt: new Date().toISOString(),
	metadata: {
		isFlyable: true,
		isRideable: true,
		isNeon: true,
		isMegaNeon: false,
	},
};

interface ListingCardProps {
	listing?: typeof mockListing;
	item?: typeof mockItem;
	user?: typeof mockUser;
}

export default function ListingCard({
	listing = mockListing,
	item = mockItem,
	user = mockUser,
}: ListingCardProps) {
	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
		}).format(amount);
	};

	const metadata = listing.metadata as {
		isFlyable: boolean;
		isRideable: boolean;
		isNeon: boolean;
		isMegaNeon: boolean;
	};

	return (
		<Card className="overflow-hidden max-w-sm w-full transition-all hover:shadow-md">
			{listing.featured && (
				<div className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 text-center">
					Featured Listing
				</div>
			)}
			<CardHeader className="p-0">
				<div className="relative">
					<img
						src={item.image || "/placeholder.svg"}
						alt={item.name}
						className="w-full h-48 object-cover"
					/>
					<div className="absolute top-2 right-2 flex gap-1">
						<Badge variant="secondary" className="text-xs">
							{listing.status}
						</Badge>
					</div>
				</div>
			</CardHeader>
			<CardContent className="p-4">
				<div className="flex justify-between items-start mb-2">
					<div>
						<h3 className="font-bold text-lg">{item.name}</h3>
						<p className="text-sm text-muted-foreground">{item.description}</p>
						<div className="flex items-center mt-2 gap-2">
							<img
								src={user.avatar || "/placeholder.svg"}
								alt={user.name}
								className="w-6 h-6 rounded-full"
							/>
							<span className="text-sm font-medium">{user.name}</span>
							<div className="flex items-center">
								<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
								<span className="text-xs ml-1">{user.rating}</span>
							</div>
						</div>
					</div>
					<div className="text-xl font-bold text-primary">
						{formatCurrency(listing.price)}
					</div>
				</div>

				<div className="text-sm text-muted-foreground">
					Quantity: {listing.quantity}
				</div>

				<Separator className="my-3" />

				<div className="flex flex-wrap gap-2 mt-2">
					{metadata.isFlyable && (
						<Badge
							variant="outline"
							className="flex items-center gap-1 bg-blue-50"
						>
							<Plane className="h-3 w-3" />
							Flyable
						</Badge>
					)}
					{metadata.isRideable && (
						<Badge
							variant="outline"
							className="flex items-center gap-1 bg-amber-50"
						>
							<Horse className="h-3 w-3" />
							Rideable
						</Badge>
					)}
					{metadata.isNeon && (
						<Badge
							variant="outline"
							className="flex items-center gap-1 bg-purple-50"
						>
							<Zap className="h-3 w-3" />
							Neon
						</Badge>
					)}
					{metadata.isMegaNeon && (
						<Badge
							variant="outline"
							className="flex items-center gap-1 bg-pink-50"
						>
							<Star className="h-3 w-3" />
							Mega Neon
						</Badge>
					)}
				</div>
			</CardContent>
			<CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
				Listed{" "}
				{formatDistanceToNow(new Date(listing.createdAt), { addSuffix: true })}
			</CardFooter>
		</Card>
	);
}
