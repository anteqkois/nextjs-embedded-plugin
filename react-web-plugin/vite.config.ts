import cdn from 'vite-plugin-cdn-import'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
// import { libInjectCss } from 'vite-plugin-lib-inject-css'
// import dts from "vite-plugin-dts";
// import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/main.ts"),
      name: "react-web-plugin",
    },
    // sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
		// libInjectCss(),
    cdn({
      modules: [
        {
          name: "react",
          var: "React",
          path: `umd/react.production.min.js`,
        },
        {
          name: "react-dom",
          var: "ReactDOM",
          path: `umd/react-dom.production.min.js`,
        },
      ],
    }),
  ],
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
