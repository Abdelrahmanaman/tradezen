import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Clock, Crown, ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";
export default function ListingCard() {
	return (
		<Card className="w-full max-w-sm overflow-hidden rounded-lg border-none bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg transition-all duration-300 hover:shadow-xl">
			<CardHeader className="space-y-2 pb-4">
				<div className="flex items-center justify-between">
					<CardTitle className="text-xl font-bold text-purple-900">
						Trading
					</CardTitle>
					<Badge variant="outline" className="bg-green-100 text-green-700">
						Active
					</Badge>
				</div>
				<CardDescription className="text-base font-medium text-purple-700 hover:text-purple-900">
					<Link
						to="/"
						className="group flex items-center gap-2 hover:underline"
					>
						Kang the Decapitator and 2x Runed Orbs
						<ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
					</Link>
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6 pb-6">
				<div>
					<span className="text-sm font-medium text-purple-600">Seeking</span>
					<div className="mt-2 flex-wrap flex items-center justify-between rounded-md bg-purple-100 p-3">
						<p className="flex items-center gap-2 font-semibold text-purple-900">
							<Crown className="h-6 w-6 text-yellow-500" />
							<span className="text-2xl">85</span>
						</p>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Badge
										variant="secondary"
										className=" bg-purple-200 text-purple-700"
									>
										OR DIABLO IV ITEMS
									</Badge>
								</TooltipTrigger>
								<TooltipContent>
									<p>Equivalent value in Diablo IV items</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
				<Separator className="bg-purple-200" />
				<div>
					<span className="text-sm font-medium text-purple-600">
						Highest Bid
					</span>
					<div className="mt-2 flex items-center justify-between">
						<p className="flex items-center gap-2 font-semibold text-purple-900">
							<Crown className="h-6 w-6 text-yellow-500" />
							<span className="text-2xl">52.00</span>
						</p>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col items-stretch gap-4 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<div className="flex flex-wrap gap-2">
						<Badge
							variant="secondary"
							className="bg-white/10 text-white hover:bg-white/20"
						>
							WORLD OF WARCRAFT
						</Badge>
						<Badge
							variant="secondary"
							className="bg-white/10 text-white hover:bg-white/20"
						>
							DIABLO IV
						</Badge>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3 w-full">
						<Avatar className="h-10 w-10 border-2 border-white">
							<AvatarImage
								src="/placeholder.svg?height=40&width=40"
								alt="Vinnie"
							/>
							<AvatarFallback>V</AvatarFallback>
						</Avatar>
						<div className="flex  justify-between w-full">
							<span className="text-sm font-medium text-white">Vinnie</span>
							<span className="flex items-center gap-1 text-xs text-purple-200">
								<Clock className="h-3 w-3" />2 hours ago
							</span>
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
