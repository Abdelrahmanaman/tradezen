import PaymentUI from "@/components/payments-ui";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/purchase/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="px-4 grid place-content-center h-full ">
			<div className="text-center mb-16 ">
				<div className="inline-block mb-4">
					<div className="relative">
						<div className="relative bg-secondary px-6 py-2 rounded-lg">
							<span className="text-sm font-medium text-gray-300">
								NEXUS GAMING NETWORK
							</span>
						</div>
					</div>
				</div>
				<h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
					Power Up Your Game
				</h1>
				<p className="text-gray-400 max-w-xl mx-auto text-lg">
					Purchase Nexus Coins to unlock exclusive items and enhance your gaming
					experience
				</p>
			</div>
			<PaymentUI />
		</section>
	);
}
