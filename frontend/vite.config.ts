import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		eslintPlugin({
			// setup the plugin
			cache: false,
			include: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
			exclude: [],
		}),
	],
	server: {
		proxy: {
			"/api": "http://localhost:8888",
		},
	},
});
