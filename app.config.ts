// app.config.ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		preset: "bun",
	},
	vite: {
		plugins: [
			tsConfigPaths({
				projects: ["./tsconfig.json"],
			}),
			tailwindcss(),
		],
	},

	react: {
		babel: {
			plugins: [
				[
					"babel-plugin-react-compiler",
					{
						target: "19",
					},
				],
			],
		},
	},
});
