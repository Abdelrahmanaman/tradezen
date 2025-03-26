import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/adoptme/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="flex	 md:flex-nowrap flex-wrap">
			This page will list the latest trading and etc
			<Link to="/adoptme/product">Products page</Link>
		</section>
	);
}
