import { type } from "arktype";

export const addOfferSchema = type({
	listingId: type("number").configure({
		message: "Invalid listing ID",
	}),
	offer: type({
		name: type("string"),
		quantity: type("number"),
	})
		.array()
		.configure({
			message: "Please select items to offer",
		}),
});

export type AddOfferType = typeof addOfferSchema.infer;

export type OfferItem = {
	name: string;
	quantity: number;
};
