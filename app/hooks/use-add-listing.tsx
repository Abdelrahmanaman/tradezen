import { addListSchema, type AddListType } from "@/lib/validation/add-list";
import { createServerFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { auth } from "@/lib/auth/auth";
import { tryCatch } from "@/lib/try-catch";
import { db } from "../../db/db";
import { listings } from "../../db/schema";

export const addListing = createServerFn({ method: "POST" })
	.validator((data: unknown): AddListType => {
		const assertedData = addListSchema.assert(data); // Validate the input
		return assertedData;
	})
	.handler(async ({ data: values }) => {
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
		const result = await db
			.insert(listings)
			.values({
				sellerId: userId,
				age: values.age,
				itemId: values.itemId,
				price: values.amount,
				quantity: values.amount,
				lookingFor: JSON.stringify(values.lookingFor),
				metadata: {
					isFlyable: values.isFlyable,
					isRideable: values.isRideable,
					isNeon: values.isNeon,
					isMegaNeon: values.isMegaNeon,
				},
			})
			.returning();
		console.log("Insertion Result:", result);
	});

export function useAddListing() {
	return useMutation({
		mutationFn: (value: AddListType) => addListing({ data: value }),
		onSuccess: () => {
			toast.success("Listing added successfully");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
}
