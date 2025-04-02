import { type } from "arktype";

export const ageOptions = {
	newborn: "Newborn",
	junior: "Junior",
	preTeen: "Pre-Teen",
	teen: "Teen",
	postTeen: "Post-Teen",
	fullGrown: "Full-Grown",
} as const;

export type OjectValues<T> = T[keyof T];

export type AgeType = OjectValues<typeof ageOptions>;

export const addListSchema = type({
	itemId: type("number").configure({
		message: "Invalid item ID",
	}),
	amount: type("number >= 1").configure({
		message: "Invalid number",
	}),
	isFlyable: type("boolean").configure({
		message: "isFlyable must be a boolean",
	}),
	isRideable: type("boolean").configure({
		message: "isRideable must be a boolean",
	}),
	isNeon: type("boolean").configure({
		message: "isNeon must be a boolean",
	}),
	isMegaNeon: type("boolean").configure({
		message: "isMegaNeon must be a boolean",
	}),
	age: type.valueOf(ageOptions).configure({
		message: "Invalid age",
	}),
	lookingFor: type("string[]").configure({
		message: "Trade for is invalid",
	}),
	slug: type("string").configure({
		message: "slug is invalid",
	}),
});

export type AddListType = typeof addListSchema.infer;
