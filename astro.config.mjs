import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kerala.stateofthemap.in",
  integrations: [react(), mdx()],
  redirects: {
    "/": "https://wiki.openstreetmap.org/wiki/State_of_the_Map_Kerala_2025",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
