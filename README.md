Bunny Blog

以 Nuxt.js 3 撘建而成的 Blog

- Theme: [alpine](https://github.com/nuxt-themes/alpine)
- module:
  - https://github.com/nuxt/content


使用 gh-pages 幫忙佈署 Github Page


## Clone

Clone the repository (using `nuxi`):

```bash
npx nuxi init -t themes/alpine
```

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Edge Side Rendering

Can be deployed to Vercel Functions, Netlify Functions, AWS, and most Node-compatible environments.

Look at all the available presets [here](https://v3.nuxtjs.org/guide/deploy/presets).

```bash
pnpm build
```

## Static Generation

Use the `generate` command to build your application.

The HTML files will be generated in the .output/public directory and ready to be deployed to any static compatible hosting.

```bash
pnpm generate
```

## Preview build

You might want to preview the result of your build locally, to do so, run the following command:

```bash
pnpm preview
```

---

For a detailed explanation of how things work, check out [Alpine](https://alpine.nuxt.space).
