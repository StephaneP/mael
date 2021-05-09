import path from "path";
import bundle, { typeMapping } from "./bundle";

export default async function getContent(
  type: "post" | "book" | "snippet" | "misc",
  slug: string
) {
  const contentPath = path.join(
    process.cwd(),
    "content",
    typeMapping[type],
    `${slug}.mdx`
  );
  const result = await bundle(contentPath);
  return {
    code: result.code,
    frontmatter: result.frontmatter,
  };
}
