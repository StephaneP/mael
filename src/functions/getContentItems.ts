import { promises as fs } from "fs";
import path from "path";
import bundle, { typeMapping } from "./bundle";

export default async function getContentItems(
  type: "post" | "book" | "project" | "snippet" | "job" | "misc",
  options: {
    includeCode?: boolean;
  } = {}
) {
  const rootDir = path.join(process.cwd(), "content");
  const contentRootDir = path.join(rootDir, typeMapping[type] || "");
  const entries = await fs.readdir(contentRootDir, { withFileTypes: true });
  const embellishedEntries = (
    await Promise.all(
      entries.map(async (entry) => {
        if (entry.isDirectory()) return;
        if (entry.name.startsWith(".")) return;
        const contentPath = path.join(contentRootDir, entry.name);
        const result = await bundle(contentPath);
        const uri = contentPath.replace(rootDir, "");
        const nameWithNoExt = `${uri.replace(/\.mdx?$/, "")}`;
        const item = {
          name: nameWithNoExt.split("/").slice(-1)[0],
          uri: `/${([type] as string[])
            .concat(nameWithNoExt.split("/").slice(2))
            .join("/")}`,
          path: contentPath.replace(rootDir, ""),
          frontmatter: result.frontmatter,
          code: "",
        };
        if (options.includeCode) item.code = result.code;
        return item;
      })
    )
  ).filter(Boolean);
  return embellishedEntries;
}
