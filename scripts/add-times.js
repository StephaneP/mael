const { promises: fs } = require("fs");
const path = require("path");
const klaw = require("klaw");
const through2 = require("through2");

const BASE_DIR = path.join(__dirname, "..", "pages");

const handle = through2.obj(async function (item, _enc, next) {
  this.push(item);
  if (path.extname(item.path) === ".mdx") {
    const content = (await fs.readFile(item.path)).toString();
    const frontMatter = content.match(/^---(.|\n)*---/);
    if (frontMatter) {
      const lines = frontMatter[0].split("\n");
      const newFrontMatter = [
        ...lines
          .slice(0, lines.length - 1)
          .filter((i) => !i.startsWith("createdAt:") && !i.startsWith("modifiedAt:")),
        `createdAt: ${item.stats.birthtime.toISOString()}`,
        `modifiedAt: ${item.stats.mtime.toISOString()}`,
        "---",
      ].join("\n");
      await fs.writeFile(item.path, content.replace(frontMatter[0], newFrontMatter));
    }
    next();
  } else {
    next();
  }
});

klaw(BASE_DIR)
  .pipe(handle)
  .on("end", () => console.info("done"));
