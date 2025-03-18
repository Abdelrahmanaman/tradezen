import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link, type LinkOptions } from "@tanstack/react-router";
import {
	BadgeCent,
	Binoculars,
	HandCoins,
	ShoppingCart,
	SquarePlus,
	User,
	type LucideIcon,
} from "lucide-react";
import { NavUser } from "./nav-user";

type SidebarDataType = {
	title: string;
	items?: {
		title: string;
		href: LinkOptions["to"];
		icon: LucideIcon;
	}[];
};
// This is sample data.
const data: SidebarDataType[] = [
	{
		title: "Trade Hub",
		items: [
			{ title: "Browse Trades", href: "/", icon: Binoculars },
			{ title: "List Item", href: "/", icon: SquarePlus },
		],
	},
	{
		title: "Nexus Gold",
		items: [
			{ title: "Buy NG", href: "/purchase", icon: ShoppingCart }, // Your purchase icon
			{ title: "Cash Out", href: "/", icon: HandCoins },
		],
	},
	{
		title: "Profile",
		items: [
			{ title: "My Trades", href: "/", icon: HandCoins },
			{ title: "Settings", href: "/", icon: HandCoins },
		],
	},
];
const user = {
	name: "shadcn",
	email: "m@example.com",
	avatar: "/avatars/shadcn.jpg",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props} className="relative z-10">
			{/* <SidebarTrigger /> */}
			<SidebarHeader>
				<span className="text-2xl font-bold ml-1">TradeZen</span>
			</SidebarHeader>
			<SidebarContent>
				{/* We create a SidebarGroup for each parent. */}
				{data.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item?.items?.map((subItem) => (
									<SidebarMenuItem key={subItem.title}>
										<SidebarMenuButton asChild>
											<div className="flex items-center">
												<subItem.icon className="size-5" />{" "}
												<Link to={subItem.href}>{subItem.title}</Link>
											</div>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
