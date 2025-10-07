import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Replace "yourusername" and "reponame" accordingly
export default defineConfig({
  plugins: [react()],
  base: "/Self-improves/", // 👈 IMPORTANT for GitHub Pages
});


