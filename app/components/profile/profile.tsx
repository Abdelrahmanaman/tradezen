import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Disc, FlagIcon, Twitch, UserPlusIcon } from "lucide-react";
import { useState } from "react";

export default function Profile() {
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
							Legendary Trader | Member since 2021
						</CardDescription>
						<div className="flex gap-2 text-sm">
							<div>
								<span className="flex items-center gap-1">
									<strong>3.2K</strong>Followers
								</span>
							</div>
							<div>
								<span className="flex items-center gap-1">
									<strong>1.2K</strong>Following
								</span>
							</div>
							<div>
								<span className="flex items-center gap-1">
									<strong>124</strong>Trades
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2 mt-2">
							<Disc className="w-4 h-4" />
							<span>Discord: UserName123#1234</span>
						</div>
						<div className="flex items-center gap-2 mt-1">
							<Twitch className="w-4 h-4" />
							<span>Steam: UserName123</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<p className=" border border-pink-200 max-w-[50ch] font-thin p-4 rounded-3xl ">
					Avid gamer and collector. Specializing in rare Diablo 2 items and WoW
					mounts. Always looking for fair trades and new gaming buddies!
				</p>
			</CardContent>
		</Card>
	);
}
