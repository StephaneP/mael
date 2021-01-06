import puppeteer from "puppeteer";
import data from "../data/basicProjects";

async function run() {
  const filter = process.argv
    .slice(2)
    .map((i) => i.trim())
    .filter(Boolean);
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
  });
  if (filter.length)
    console.warn("Getting screenshots for:", filter.join(", "));
  await Promise.all(
    data.map(async (d) => {
      const name = d.github.split("/").pop();
      if (filter.length > 0 && !filter.includes(name)) {
        console.warn("Skipping", name);
        return;
      }
      try {
        const page = await browser.newPage();
        await page.goto(d.url, { waitUntil: "networkidle0", timeout: 60000 });
        await page.setViewport({ width: 1920, height: 1280 });
        await page.screenshot({
          path: `./public/images/projects/${name}.png`,
          type: "png",
        });
        await page.close();
      } catch (e) {
        console.error(`Issue screenshotting ${name}: ${e.message}`);
      }
    })
  );
  await browser.close();
}

run();
