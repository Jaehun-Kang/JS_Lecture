import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/JS_Lecture/",
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("level_1")) {
            return "level-1";
          }
          if (id.includes("level_2")) {
            return "level-2";
          }
          if (id.includes("level_3")) {
            return "level-3";
          }
        },
      },
    },
  },
});
