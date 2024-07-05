import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
// import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/main.ts"),
      name: "webplugin",
      // fileName: (format) => `index.${format}.js`,
    },
    // rollupOptions: {
    //   external: [
    //     "react",
    //     "react-dom",
    //     // "tailwindcss"
    //   ],
    //   output: {
    //     paths: {
    //       react: "https://unpkg.com/react@16/umd/react.production.min.js",
    //       "react-dom": "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
    //     },
    //     // globals: {
    //     //   react: "React",
    //     //   "react-dom": "ReactDOM",
    //     //   tailwindcss: "tailwindcss",
    //     // },
    //   },
    // },
    // sourcemap: true,
    emptyOutDir: true,
  },
  // plugins: [react(), dts({ rollupTypes: true })],
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
