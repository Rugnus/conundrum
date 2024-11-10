import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      "@pages": "src/pages",
      "@conundrum/ui-kit": "libs/ui-kit",
      "@conondrum/models": "libs/models",
    },
  },
});
