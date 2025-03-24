// app/routes/index.tsx
import SearchForm from "@/components/adopt-me/search";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<section className="">
			<div className=""> hello</div>
			<SearchForm />
		</section>
	);
}
