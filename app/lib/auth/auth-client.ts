import { createAuthClient } from "better-auth/react";

//TODO: add typesafe process env checker
const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL || "",
});

export const { signIn, signOut, useSession, signUp, getSession } = authClient;
