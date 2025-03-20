import { Link } from "@tanstack/react-router";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Badge } from "./ui/badge";
import LotusCoin from "./lotus-coin";

export default function Header() {
	return (
		<header className="flex items-center justify-between ">
			<Link to="/" className="text-2xl font-bold lg:hidden">
				TradeZen
			</Link>

			<nav className="ml-auto">
				<ul className="flex items-center gap-4">
					<li>
						<Badge className="gap-1">
							<LotusCoin />
							<span className="font-semibold">500 NG</span>
						</Badge>
					</li>

					<li className="lg:hidden">
						<SidebarTrigger />
					</li>
				</ul>
			</nav>
		</header>
	);
}
