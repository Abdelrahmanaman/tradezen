import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import Stripe from "stripe";
import { tryCatch } from "@/lib/try-catch";

export const APIRoute = createAPIFileRoute("/api/create-checkout-session")({
	POST: async ({ request, params }) => {
		const stripe = new Stripe(
			"sk_test_51R3oTKHlJZxCutlZnAXA1U54bvqkByAnljKVukC7fxdBEsw6Dr9FsBVKrCbkhVLMHqD6HG20R7YUEWhEJneXzztn00GgRdmuTzz",
		);
		async function createSession(): Promise<Stripe.Checkout.Session> {
			return stripe.checkout.sessions.create({
				line_items: [{ price: "price_1R3ruaHlJZxCutlZzGsUD8Td", quantity: 1 }],
				mode: "payment",
				success_url: "http://localhost:3000",
				cancel_url: "http://localhost:3000",
			});
		}

		const sessionResult = await tryCatch(createSession());

		if (sessionResult.error !== null) {
			return json(
				{ error: sessionResult.error.message || "Server error" },
				{ status: 500 },
			);
		}

		const session = sessionResult.data;

		if (!session.url) {
			return json(
				{ error: "Failed to create checkout session: missing URL" },
				{ status: 500 },
			);
		}

		return new Response(null, {
			status: 302, // Temporary redirect
			headers: {
				Location: session.url,
			},
		});
	},
});
