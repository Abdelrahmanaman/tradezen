import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { i as ie, Y } from './db-Dk0lmzCx.mjs';

const n = betterAuth({ database: drizzleAdapter(ie, { provider: "sqlite", schema: Y }), user: { modelName: "user", additionalFields: { userName: { type: "string", nullable: false, unique: true, required: true }, name: { type: "string", nullable: true, required: false }, bio: { type: "string", nullable: true, required: false }, totalCoins: { type: "number", nullable: false, required: false, input: false }, reputationScore: { type: "number", nullable: false, required: false, input: false }, followersCount: { type: "number", nullable: false, required: false, input: false }, followingCount: { type: "number", nullable: false, required: false, input: false }, tradeCount: { type: "number", nullable: false, required: false, input: false } } }, emailAndPassword: { enabled: true }, socialProviders: { google: { enabled: true, clientId: process.env.GOOGLE_CLIENT_ID || "", clientSecret: process.env.GOOGLE_CLIENT_SECRET || "" } } });

export { n };
//# sourceMappingURL=auth-BQLVW3eF.mjs.map
