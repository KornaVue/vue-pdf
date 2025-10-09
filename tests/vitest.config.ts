import { resolve } from "node:url";
import { defineConfig, mergeConfig } from "vitest/config";
import commonConfig from "../vite.config";

export default mergeConfig(
  commonConfig,
  defineConfig({
    test: {
      browser: {
        provider: "playwright",
        enabled: true,
        headless: true,
        instances: [{ browser: "firefox" }],
      },
    },
    resolve: {
      alias: {
        "@tato30/vue-pdf": resolve(__dirname, "packages/vue-pdf/src"),
      },
    },
  })
);
