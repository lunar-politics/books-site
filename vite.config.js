import { defineConfig } from "vite";
import pug from 'vite-plugin-pug';

export default defineConfig({
    base: '/books-site/',
    plugins: [pug()],
    css: {
      devSourcemap: true,
    },  
})