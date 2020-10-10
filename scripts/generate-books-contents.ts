import { promises as fs } from "fs";
import { join } from "path";
import glob from "glob";

function getFiles(baseDir: string) {
  return new Promise<any[]>((resolve, reject) => {
    glob(`${baseDir}/**/*.mdx`, async (err, files) => {
      if (err) {
        return reject(err);
      }
      const fileContents = await Promise.all(
        files.map(async (f) => {
          const content = `${await fs.readFile(f, { encoding: "utf-8" })}`;
          const metaStr = content.match(/const meta = {(.*?)}/s);
          // eslint-disable-next-line no-eval
          const metaObj = metaStr.length ? eval(`({${metaStr[1]}})`) : {};
          return {
            url: f.replace(baseDir, "").replace(".mdx", ""),
            ...metaObj,
          };
        })
      );
      return resolve(fileContents);
    });
  });
}

async function run() {
  const booksDir = join(__dirname, "..", "pages", "books");
  const dir = await fs.readdir(booksDir);
  for (const folder of dir) {
    const bookBase = join(booksDir, folder);
    const files = await getFiles(bookBase);
    const contents = files.reduce((acc, item) => {
      if (item.section === 1) {
        acc[item.chapter] = {
          name: item.title,
          url: `/books/${folder}${item.url}`,
          sections: (acc[item.chapter] || {}).sections || {},
        };
      } else {
        acc[item.chapter] = acc[item.chapter] || {};
        acc[item.chapter].sections = acc[item.chapter].sections || {};
        acc[item.chapter].sections[item.section] = {
          name: item.title,
          url: `/books/${folder}${item.url}`,
        };
      }
      return acc;
    }, {});
    await fs.writeFile(
      join(
        __dirname,
        "..",
        "components",
        "layouts",
        "bookpage",
        folder,
        "contents.ts"
      ),
      `export default ${JSON.stringify(contents, undefined, 2)}`
    );
  }
}

run();
