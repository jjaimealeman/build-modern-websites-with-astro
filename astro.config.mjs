import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://build-modern-websites-with-astro.netlify.app/',
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind(), icon(), sitemap()],
  output: "hybrid",
  adapter: netlify()
});
