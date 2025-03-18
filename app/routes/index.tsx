// app/routes/index.tsx
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<>
			<div className=""> hello</div>
		</>
	);
}
