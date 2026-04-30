import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import path from "node:path";
import { fileURLToPath } from "url";

// Fix for __dirname in ES modules
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "/trial-lhsr/", // ⚠️ IMPORTANT for GitHub Pages

  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});