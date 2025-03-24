import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../../../db/db";
import * as schema from "../../../db/schema";
export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "sqlite",
		schema,
	}),
	user: {
		modelName: "user",
		additionalFields: {
			userName: {
				type: "string",
				nullable: false,
				unique: true,
				required: true,
			},
			name: {
				type: "string",
				nullable: true,
				required: false,
			},
			// bio: {
			// 	type: "string",
			// 	nullable: true,
			// 	required: false,
			// },
			// totalCoins: {
			// 	type: "number",
			// 	nullable: false,
			// 	required: false,
			// },
			// reputationScore: {
			// 	type: "number",
			// 	nullable: false,
			// 	required: false,
			// },
			// followersCount: {
			// 	type: "number",
			// 	nullable: false,
			// 	required: false,
			// },
			// followingCount: {
			// 	type: "number",
			// 	nullable: false,
			// 	required: false,
			// },
		},
	},
	emailAndPassword: {
		enabled: true,
	},
	socialProviders: {
		google: {
			enabled: true,
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		},
	},
});
