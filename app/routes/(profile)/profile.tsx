import Profile from "@/components/profile/profile";
import PublicProfileTabs from "@/components/profile/profile-tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(profile)/profile")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section>
			<Profile />
			<PublicProfileTabs />
		</section>
	);
}
