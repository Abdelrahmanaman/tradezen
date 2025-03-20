import LoginForm from "@/components/auth/login-form";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="grid place-content-center h-full">
			<div>
				<LoginForm />
			</div>
			<p className="mt-8 text-center text-xs text-gray-500">
				By continuing, you agree to our{" "}
				<Link to="/" className="text-primary hover:underline">
					Terms of Service
				</Link>{" "}
				and{" "}
				<Link to="/" className="text-primary hover:underline">
					Privacy Policy
				</Link>
			</p>
		</section>
	);
}
