/* eslint-disable import/no-extraneous-dependencies */
const withOptimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[require("remark-emoji"), { padSpaceAfter: true }]],
    rehypePlugins: [
      require("rehype-slug"),
      [require("rehype-autolink-headings"), { behaviour: "wrap" }],
    ],
  },
});

module.exports = withOptimizedImages(
  withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  })
);
