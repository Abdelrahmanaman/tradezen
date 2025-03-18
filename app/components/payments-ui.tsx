"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	CheckCircle,
	CoinsIcon,
	CreditCard,
	ShoppingCart,
	Sparkles,
} from "lucide-react";

export default function PaymentUI() {
	const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

	const plans = [
		{ id: "basic", coins: 100, price: 3.99, popular: false },
		{ id: "standard", coins: 250, price: 9.99, popular: true },
		{ id: "premium", coins: 500, price: 19.99, popular: false },
	];

	const handleSelectPlan = (planId: string) => {
		setSelectedPlan(planId);
	};

	const handlePurchase = () => {
		if (!selectedPlan) return;
		// Here you would integrate with your payment processor
		alert(`Processing payment for ${selectedPlan} plan`);
	};

	return (
		<div className="min-h-screen ">
			<div className="">
				<div className="flex w-full gap-2 justify-center flex-wrap ">
					{plans.map((plan) => (
						<div key={plan.id} className="relative group  min-w-[20rem]">
							<Card className={"p-2 hover:motion-bg-out-zinc-900 motion-bg-"}>
								{plan.popular && (
									<div className="absolute top-0 right-0 z-10">
										<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center">
											<Sparkles className="w-3 h-3 mr-1" />
											BEST VALUE
										</div>
									</div>
								)}

								<div className="absolute top-0 left-0 w-full ng h-[3px] bg-gradient-to-r from-transparent via-purple-900  to-transparent opacity-30" />

								<CardContent className="p-2">
									<div className="flex items-center justify-center mb-6">
										<div className="relative">
											<div />
											<div className="relative w-16 h-16 flex items-center justify-center bg-[#151525] rounded-full border border-purple-500/30">
												<CoinsIcon className="w-10 h-10" />
											</div>
										</div>
									</div>

									<div className="text-center mb-6">
										<h3 className="text-xl font-bold mb-1">{plan.coins} NG</h3>
										<p className="text-gray-400 text-sm">
											~${(plan.price / plan.coins).toFixed(2)}/NG
										</p>
									</div>

									<ul className="space-y-3 text-sm text-gray-300 mb-6">
										<li className="flex items-center gap-2">
											<CheckCircle className="size-4 text-green-700" /> Instant
											delivery
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="size-4 text-green-700" />
											Use across all games
										</li>
										<li className="flex items-center gap-2">
											<CheckCircle className="size-4 text-green-700" />
											24/7 support
										</li>
									</ul>
								</CardContent>

								<CardFooter className="p-0">
									<Button
										className={"w-full font-semibold h-12 "}
										onClick={() => handleSelectPlan(plan.id)}
									>
										${plan.price}
									</Button>
								</CardFooter>
							</Card>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
