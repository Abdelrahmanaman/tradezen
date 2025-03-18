import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { NotFound } from "./components/not-found";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import type { User } from "better-auth";
import { DefaultCatchBoundary } from "./components/catch-boundary";

export function createRouter(user: User) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				staleTime: 60 * 1000, // 1 minute (for SSR purposes)
			},
		},
	});

	return routerWithQueryClient(
		createTanStackRouter({
			routeTree,
			context: { queryClient, user },
			defaultPreload: "intent",
			defaultPreloadStaleTime: 0,
			defaultErrorComponent: DefaultCatchBoundary,
			defaultNotFoundComponent: NotFound,
			scrollRestoration: true,
		}),
		queryClient,
	);
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}
