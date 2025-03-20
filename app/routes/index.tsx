// app/routes/index.tsx
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<section className="">
			<div className=""> hello</div>
		</section>
	);
}
