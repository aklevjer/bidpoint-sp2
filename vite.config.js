import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { defineConfig } from "vite";

// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        listings: resolve(__dirname, "listings/index.html"),
        singleListing: resolve(__dirname, "listings/listing/index.html"),
        profile: resolve(__dirname, "profile/index.html"),
      },
    },
  },
});
