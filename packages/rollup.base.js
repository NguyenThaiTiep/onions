const { defineConfig } = require("rollup");
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
// import peerDepsExternal from "rollup-plugin-peer-deps-external";

const root = process.platform === "win32" ? path.resolve("/") : "/";

const external = (id) => !id.startsWith(".") && !id.startsWith(root);

export const config = () =>
  defineConfig([
    {
      input: "src/index.ts",
      external,
      output: [
        {
          dir: "dist",
          format: "es",
          entryFileNames: `[name].es.js`,
          preserveModules: true,
        },
        {
          dir: "dist",
          format: "cjs",
          entryFileNames: `[name].js`,
          preserveModules: true,
        },
      ],
      plugins: [
        // peerDepsExternal(),
        nodeResolve(),
        typescript(),
      ],
    },
  ]);
