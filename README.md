
This is what we are building starting in Module 39.
https://astro-portfolio-site.netlify.app/

```sh
npm create astro@latest
pnpm astro add tailwind
```

## INSTALL FONTS
https://docs.astro.build/en/guides/fonts/#using-fontsource
```sh
pnpm add @fontsource/raleway
pnpm add @fontsource/poppins
```
Import the font in the component where you want to use it:
`src/layouts/BaseHead.astro`
```sh
---
import '@fontsource/raleway';
import '@fontsource/poppins';
---
```
Then use the font's name as shown:
```sh
h1 {
    font-family: "Raleway", sans-serif;
    font-family: "Poppins", sans-serif;
}
```
