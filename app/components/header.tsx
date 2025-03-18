import { Link } from "@tanstack/react-router";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
	return (
		<header className="flex items-center justify-between  bg-secondary p-4">
			<Link to="/" className="text-2xl font-bold">
				TradeZen
			</Link>
			<nav>
				<SidebarTrigger className="block" />
			</nav>
		</header>
	);
}
