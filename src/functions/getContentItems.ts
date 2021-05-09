import { promises as fs, Stats } from "fs";
import path from "path";
import recursive from "recursive-readdir";
import bundle, { typeMapping } from "./bundle";

function recursiveIgnore(file: string, _stats: Stats) {
  const info = path.parse(file);
  return info.base.startsWith(".");
}

async function getRecursiveDir(rootDir: string) {
  return recursive(rootDir, [recursiveIgnore]);
}

export default async function getContentItems<T = unknown>(
  type: "post" | "book" | "project" | "snippet" | "job" | "misc",
  options: {
    includeCode?: boolean;
    recursive?: boolean;
  } = {}
): Promise<T[]> {
  const rootDir = path.join(process.cwd(), "content");
  const contentRootDir = path.join(rootDir, typeMapping[type] || "");
  const entries = await (options.recursive
    ? getRecursiveDir(contentRootDir)
    : fs.readdir(contentRootDir, { withFileTypes: true }));
  const embellishedEntries = (
    await Promise.all(
      entries.map(async (entry) => {
        if (typeof entry !== "string" && entry.isDirectory()) return;
        if (typeof entry !== "string" && entry.name.startsWith(".")) return;
        const contentPath =
          typeof entry !== "string"
            ? path.join(contentRootDir, entry.name)
            : entry;
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
  return embellishedEntries as T[];
}
