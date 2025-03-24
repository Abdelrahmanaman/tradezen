import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import type { auth } from "./auth";

//TODO: add typesafe process env checker
const authClient = createAuthClient({
	plugins: [inferAdditionalFields<typeof auth>()],
	baseURL: "http://localhost:3000",
});

export const { signIn, signOut, useSession, signUp, getSession } = authClient;


