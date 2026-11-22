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
        include: ["src/engine.d.ts", "src/rules/*.ts"],
        copyDtsFiles: true,
      })
  ],
  build: {
    lib: {
      entry: "src/engine.d.ts",
      name: "Engine",
      formats: ["es", "cjs"],
      fileName: "engine"
    },
    outDir: "dist-lib"
  }
});
