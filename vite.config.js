import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-spring"],
    },
  },
});

// export default defineConfig({
//   plugins: [react()],
//   publicDir: "public",
//   build: {
//     outDir: "build",
//     rollupOptions: {
//       external: ["react-spring"],
//     },
//   },
// });
