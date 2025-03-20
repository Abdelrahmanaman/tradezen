// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import globalStyle from "@/styles/globals.css?url";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import type { QueryClient } from "@tanstack/react-query";
import type { User } from "better-auth";
import { getUserQuery } from "@/services/auth";
export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	user: User | null;
}>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: globalStyle,
			},
		],
	}),

	component: RootComponent,
	beforeLoad: async ({ context }) => {
		const user = await context.queryClient.fetchQuery(getUserQuery());
		console.log("hello fetch", user);
		return { user };
	},
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<SidebarProvider>
						<aside>
							<AppSidebar />
						</aside>
						<main className="min-h-dvh w-full">
							<Header />
							{children}
						</main>
					</SidebarProvider>
					<Scripts />
				</ThemeProvider>
			</body>
		</html>
	);
}
