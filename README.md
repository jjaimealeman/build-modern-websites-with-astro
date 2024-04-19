This is the project built from Coding In Public paid course https://learnastro.dev/

> "This is my ~~rifle~~ _Astro site_. There are many like it, but this one is mine."

This is the full version by Chris Pennington, author of the course.
https://astro-portfolio-site.netlify.app/

---

## _This is mine!_

This `readme` is just a short list of what I have done to my own version of the project.

```sh
npm create astro@latest
pnpm astro add tailwind
```

### INSTALL FONTS

https://docs.astro.build/en/guides/fonts/#using-fontsource

```sh
pnpm add @fontsource-variable/raleway
pnpm add @fontsource/poppins
```

```js
// src/layouts/BaseHead.astro
import "@fontsource-variable/raleway";
import "@fontsource/poppins";
```

```css
/* src/styles/global.css */
body {
  font-family: "Poppins", sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway Variable", sans-serif;
}
```

### INSTALL ICONS

```sh
pnpm astro add astro-icon
```

---

<!-- Saturday, April 13, 2024 @ 07:39:48 PM -->

## To Do After

- AFTER DEPLOYMENT, add integration sitemap
  - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- also, RSS FEED
- toggle dark/light
- opengraph images
- > pnpx astro add astro-tunnel
- GLAZE for animations & transitions https://glaze.dev/
-
