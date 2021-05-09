# 🧙 My personal site

https://mael.tech

## 🛠️ Uses

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- [Tailwind (with JIT mode)](https://tailwindcss.com/)

## ✨ Cool Features

- 🎨 Beautiful social images for blog posts generated on demand by [Microlink Cards](https://cards.microlink.io/).
- 📝 MDX driven blog using [mdx-bundler](https://github.com/kentcdodds/mdx-bundler).
  - 😄 Uses [remark-emoji](https://www.npmjs.com/package/remark-emoji) to replace `:emoji` with UTF-8 emojis.
  - 🔗 Uses [rehype-slug](https://www.npmjs.com/package/rehype-slug) and [rehype-autolink-headings](https://www.npmjs.com/package/rehype-autolink-headings) to create linked headings.
- 📈 Privacy-focused analytics with [Fathom Analytics](https://usefathom.com/).
- 🕵️‍♂️ SEO with [next-seo](https://www.npmjs.com/package/next-seo).

## 💻 Development

If you use [nvm](https://github.com/nvm-sh/nvm) when you `cd` into the directory it should automatically change your Node.js version, otherwise make sure you're using whatever it says in the [`.nvmrc`](./.nvmrc).

```sh
git clone https://github.com/maael/mael
cd mael
yarn
```

### 📜 Scripts

| Command    | Description                                                                |
| ---------- | -------------------------------------------------------------------------- |
| `dev`      | Starts the website in development mode with reloading etc.                 |
| `build`    | Bundles and builds the website.                                            |
| `start`    | Starts the bundled/built version of the website.                           |
| `prettier` | Run prettier on the directory or piped files, used like `yarn prettier .`. |
| `lint`     | Run eslint on the directory or piped files, used like `yarn lint .`.       |
| `prepare`  | Installed the husky hooks when `yarn` is run.                              |
