// app/routes/__root.tsx
import type { ReactNode } from "react";
import {
	Outlet,
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
import type { UserType } from "@/lib/auth/auth";
import { getUserQuery } from "@/services/auth";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	user: UserType | null;
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
		console.log(user);
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
	const { user } = Route.useRouteContext();
	return (
		<html suppressHydrationWarning lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<SidebarProvider>
						<aside>
							<AppSidebar user={user} />
						</aside>
						<main className="min-h-dvh w-full">
							<Header />
							{children}
							<Toaster richColors />
						</main>
					</SidebarProvider>
					<ReactQueryDevtools />
					<Scripts />
				</ThemeProvider>
			</body>
		</html>
	);
}
