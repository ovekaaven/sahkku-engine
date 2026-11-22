/**
 * Vite configuration for the library.
 */

import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";

export default defineConfig({
  plugins: [
      dts({
        entryRoot: "src",
        tsconfigPath: "tsconfig.json",
        include: ["src/rules/*.ts"]
      })
  ],
  build: {
    lib: {
      entry: "index.lib.js",
      name: "Engine",
      formats: ["es", "cjs"],
      fileName: "engine"
    },
    outDir: "dist-lib"
  }
});
