import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { UserType } from "@/lib/auth/auth";
import {
	Disc,
	FlagIcon,
	Star,
	StarIcon,
	Twitch,
	UserPlusIcon,
} from "lucide-react";
import { useState } from "react";

export default function Profile({ user }: { user: UserType }) {
	const [isFollowing, setIsFollowing] = useState(false);

	const toggleFollow = () => setIsFollowing(!isFollowing);

	return (
		<Card className="border max-w-3xl  shadow-none">
			<CardHeader>
				<div className="flex flex-col space-y-4">
					<div className="flex justify-between items-center">
						<Avatar className="w-20 h-20">
							<AvatarImage
								src="/placeholder.svg?height=80&width=80"
								alt="User avatar"
							/>
							<AvatarFallback>UN</AvatarFallback>
						</Avatar>
						<div className="flex  flex-col sm:flex-row gap-2 ">
							<Button
								onClick={toggleFollow}
								size={"sm"}
								variant={isFollowing ? "secondary" : "default"}
								className="w-24"
							>
								<UserPlusIcon className="mr-2 h-4 w-4" />
								{isFollowing ? "Unfollow" : "Follow"}
							</Button>
							<Button size={"sm"} className="w-24" variant="outline">
								<FlagIcon className="mr-2 h-4 w-4" />
								Report
							</Button>
						</div>
					</div>

					<div>
						<CardTitle className="text-2xl">UserName123</CardTitle>
						<CardDescription>
							<span>Legendary Trader | Member since 2021</span>
						</CardDescription>
						<div className="flex gap-2 text-sm">
							<div>
								<span className="flex items-center gap-1">
									<strong>{user.followersCount}</strong>Followers
								</span>
							</div>
							<div>
								<span className="flex items-center gap-1">
									<strong>{user.followingCount}</strong>Following
								</span>
							</div>
							<div>
								<span className="flex items-center gap-1">
									<strong>{user.tradeCount}</strong>Trades
								</span>
							</div>
						</div>
						<div className="flex items-center gap-1">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<StarIcon
										key={_}
										className="size-4 fill-yellow-500 text-yellow-500"
									/>
								))}
							</div>
							<span className="text-sm">{user.reputationScore} reviews</span>
						</div>
						<div className="flex items-center gap-2 mt-2">
							<Disc className="w-4 h-4" />
							<span>Discord: {user.userName}</span>
						</div>
						<div className="flex items-center gap-2 mt-1">
							<Twitch className="w-4 h-4" />
							<span>Steam: {user.userName}</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className="  max-w-[50ch] font-thin  rounded-3xl ">
					Avid gamer and collector. Specializing in rare Diablo 2 items and WoW
					mounts. Always looking for fair trades and new gaming buddies!
				</p>
			</CardContent>
		</Card>
	);
}
