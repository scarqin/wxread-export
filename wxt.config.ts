import { defineConfig } from "wxt";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { resolve } from 'node:path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  manifest: {
    name: "微信读书导出",
    homepage_url: "https://github.com/scarqin/wxread-export",
    host_permissions: ["https://i.weread.qq.com/*"],
  },
  "alias": {
    "$lib": resolve("./src/lib")
  },
  vite: () => ({
    resolve: {
      alias: {
        $lib: path.resolve("./src/lib"),
      },
    },
    plugins: [
      svelte({
        // Using a svelte.config.js file causes a segmentation fault when importing the file
        configFile: false,
        preprocess: [vitePreprocess()],
      }),
    ],
  }),
});

