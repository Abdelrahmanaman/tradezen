import { type } from "arktype";

const age = {
	newborn: "Newborn",
	junior: "Junior",
	preTeen: "Pre-Teen",
	teen: "Teen",
	postTeen: "Post-Teen",
	fullGrown: "Full-Grown",
} as const;
export const addListSchema = type({
	amount: type("number > 0").configure({
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
	age: type.valueOf(age).configure({
		message: "Invalid age",
	}),
	lookingFor: type("string[]").configure({
		message: "Trade for is invalid",
	}),
});

export type AddListType = typeof addListSchema.infer;

export const lookingForSchema = type({
	lookingFor: type("string[]").configure({
		message: "Trade for is invalid",
	}),
}).configure({
	message: "Trade for is invalid",
});

export type LookingForType = typeof lookingForSchema.infer;
