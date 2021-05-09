import { promises as fs } from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkEmoji from "remark-emoji";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import rehypeHighlightCode from "./mdx-plugins/rehype-highlight-code";
import rehypeMetaAttribute from "./mdx-plugins/rehype-meta-attribute";
import rehypeContentAttribute from "./mdx-plugins/rehype-content-attribute";
import rehypeBlockquoteMeta from "./mdx-plugins/rehype-blockquote-meta";
export { typeMapping } from "../util/content";

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "esbuild.exe"
  );
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(
    process.cwd(),
    "node_modules",
    "esbuild",
    "bin",
    "esbuild"
  );
}

export default async function bundle(contentPath: string) {
  const content = await fs.readFile(contentPath);
  const result = await bundleMDX(content.toString(), {
    cwd: path.join(process.cwd(), "src", "components"),
    xdmOptions(_input, options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkEmoji, { padSpaceAfter: true }],
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [rehypeAutolink, { behaviour: "wrap" }],
        rehypeMetaAttribute,
        rehypeHighlightCode,
        rehypeContentAttribute,
        rehypeBlockquoteMeta,
      ];
      return options;
    },
  });
  return result;
}
