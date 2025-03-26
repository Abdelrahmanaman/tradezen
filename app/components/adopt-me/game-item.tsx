import type { items } from "../../../db/schema";
import { useState } from "react";
import { Heart } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

type GameItemType = typeof items.$inferSelect;

export default function GameItem({ game }: { game: GameItemType }) {
	const [isWishlisted, setIsWishlisted] = useState(false);

	return (
		<Card className="w-full max-w-sm overflow-hidden group  p-2 relative isolate  border-zinc-700 ">
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

			<CardHeader className="p-0  ">
				<CardTitle className="text-left p-0  ">
					<Link
						to={"/adoptme/product/$productId"}
						params={{
							productId: game.slug,
						}}
					>
						<span className="  absolute inset-0 z-20" />

						{game.name}
					</Link>
				</CardTitle>
			</CardHeader>
			<CardContent className="p-0">
				<div className=" relative h-40 overflow-hidden ">
					<img
						src={game.imageUrl}
						alt={`${game.name}`}
						className="object-contain w-full h-full transition-transform group-hover:scale-105"
					/>
				</div>
			</CardContent>
		</Card>
	);
}
