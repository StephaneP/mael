const path = require("path");
const Jimp = require("jimp");
const klaw = require("klaw");
const through2 = require("through2");

const BASE_DIR = path.join(__dirname, "..", "public", "images", "tech", "logos");

const handle = through2.obj(async function (item, _enc, next) {
  this.push(item);
  if (path.extname(item.path) === ".png") {
    const image = await Jimp.read(item.path);
    await image.autocrop().write(item.path);
  }
  next();
});

klaw(BASE_DIR)
  .pipe(handle)
  .on("end", () => console.info("done"));
