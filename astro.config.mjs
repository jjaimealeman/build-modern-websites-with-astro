import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  prefetch: { prefetchAll: true },
  integrations: [tailwind(), icon()],
  output: "hybrid",
  adapter: netlify()
});
