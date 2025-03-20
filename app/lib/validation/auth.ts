import { type } from "arktype";

const strongPassword = type(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-/]).{8,}$/,
).configure({
	message: "Invalid password",
});

const email = type("string.email").configure({
	message: "Invalid email",
});

const userName = type("string > 5").configure({
	message: "Username must be at least 5 characters long",
});

export const loginPayloadSchema = type({
	email,
	password: strongPassword,
});

type LoginPayload = typeof loginPayloadSchema.infer;

export const registerPayloadSchema = type({
	userName,
	email,
	password: strongPassword,
});

type RegisterPayload = typeof registerPayloadSchema.infer;

export type { LoginPayload, RegisterPayload };
