import { createFileRoute } from "@tanstack/react-router";
import RegisterForm from "@/components/auth/register-form";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/register")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="grid place-content-center h-full">
			<div>
				<RegisterForm />
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
