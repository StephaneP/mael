import { promises as fs } from "fs";
import { join } from "path";
import readingTime from "reading-time";
import parse from "date-fns/parse";
import compareDesc from "date-fns/compareDesc";

const POSTS_DIR = join(process.cwd(), "pages/posts");

export interface PostMeta {
  title: string;
  author: string;
  tags: string;
  createdAt: string;
  readingTime: ReturnType<typeof readingTime>;
}

export interface PostProps {
  meta: PostMeta;
  path: string;
  slug: string;
}

function getDateFromStr(str?: string) {
  return parse(str, "dd/MM/yy", new Date());
}

function sortPostsByCreated(p1: PostProps, p2: PostProps) {
  return compareDesc(
    getDateFromStr(p1.meta.createdAt),
    getDateFromStr(p2.meta.createdAt)
  );
}

export default async function getPosts() {
  const paths = await fs.readdir(POSTS_DIR);
  const posts = (
    await Promise.all(
      paths.map(async (path) => {
        const postStr = await fs.readFile(join(POSTS_DIR, path), {
          encoding: "utf-8",
        });
        const metaStr = postStr.match(/const meta = {(.*?)}/s);
        try {
          // eslint-disable-next-line no-eval
          const metaObj = metaStr.length ? eval(`({${metaStr[1]}})`) : {};
          metaObj.readingTime = readingTime(postStr);
          return {
            meta: metaObj,
            path,
            slug: `/posts/${path.replace(/.mdx?$/, "")}`,
          } as PostProps;
        } catch {
          console.error(`Failed to parse meta: {${metaStr[1]}}`);
          return {
            meta: {},
            path,
            slug: `/posts/${path.replace(/.mdx?$/, "")}`,
          };
        }
      })
    )
  ).sort(sortPostsByCreated);
  const tags = [
    ...new Set<string>(
      posts.reduce(
        (acc, { meta }) =>
          acc.concat(
            (meta as any).tags
              ? (meta as PostMeta).tags.split(",").map((s) => s.trim())
              : []
          ),
        []
      )
    ),
  ];
  return { posts, tags };
}
