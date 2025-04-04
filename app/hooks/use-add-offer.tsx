import { addOfferSchema, type AddOfferType } from "@/lib/validation/add-offer";
import { useMutation } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { db } from "../../db/db";
import { offers } from "../../db/schema";
import { getWebRequest } from "@tanstack/react-start/server";
import { tryCatch } from "@/lib/try-catch";
import { auth } from "@/lib/auth/auth";

const addOffer = createServerFn({ method: "POST" })
	.validator((data: unknown): AddOfferType => {
		const assertedData = addOfferSchema.assert(data);
		return assertedData;
	})
	.handler(async ({ data: { listingId, offer } }) => {
		const request = getWebRequest();
		if (!request) {
			throw new Error("Request not found");
		}
		const { data, error } = await tryCatch(
			auth.api.getSession({
				headers: request.headers,
			}),
		);
		if (error) {
			throw new Error(error.message || "Unauthorized ");
		}
		const userId = data?.user.id;
		if (!userId) {
			throw new Error("Unauthorized ");
		}
		await db.insert(offers).values({
			listingId,
			offeredItems: offer,
			offererId: userId,
			status: "pending",
		});
	});

export const useAddOffer = () => {
	return useMutation({
		mutationFn: addOffer,
		onSuccess: () => {
			toast.success("Offer added successfully");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
};
