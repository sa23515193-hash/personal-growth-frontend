
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/personal-growth-tracker/",
  build: {
    outDir: "dist",
  },
});

