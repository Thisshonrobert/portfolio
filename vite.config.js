import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react(),tailwindcss()],
 
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
})
