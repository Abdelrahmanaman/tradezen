import Profile from "@/components/profile/profile";
import PublicProfileTabs from "@/components/profile/profile-tabs";
import { createFileRoute, redirect } from "@tanstack/react-router";
import type { UserType } from "@/lib/auth/auth";

export const Route = createFileRoute("/(profile)/profile")({
	component: RouteComponent,
	beforeLoad: async ({ context }) => {
		if (!context.user) {
			return redirect({
				to: "/login",
			});
		}
	},
});

function RouteComponent() {
	const { user } = Route.useRouteContext() as { user: UserType };
	return (
		<section>
			<h1>Hello {user.userName}</h1>
			<Profile user={user} />
			<PublicProfileTabs />
		</section>
	);
}
