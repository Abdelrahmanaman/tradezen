import { type } from "arktype";

export const addOfferSchema = type({
	offer: type("string[]").configure({
		message: "Please select items to offer",
	}),
});

export type AddOfferType = typeof addOfferSchema.infer;
