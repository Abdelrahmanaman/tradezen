import type { items } from "../../../db/schema";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type GameItemType = typeof items.$inferSelect;

export default function GameItem({ game }: { game: GameItemType }) {
	const [isWishlisted, setIsWishlisted] = useState(false);

	return (
		<Card className="w-full max-w-sm overflow-hidden group border-red-500 p-2 relative ">
			<div className="absolute top-2 right-2 z-10">
				<Button
					variant="ghost"
					size="icon"
					className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors"
					onClick={() => setIsWishlisted(!isWishlisted)}
					aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
				>
					<Heart
						className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`}
					/>
				</Button>
			</div>
			<div className="relative  h-40 overflow-hidden ">
				<img
					src={game.imageUrl}
					alt={`${game.name}`}
					className="object-contain w-full h-full transition-transform group-hover:scale-105"
				/>
			</div>
			<CardContent className="p-0">
				<div className="space-y-1">
					<h3 className="font-medium text-lg">{game.name}</h3>
					<p className="text-sm text-muted-foreground line-clamp-2">
						{game.description}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
