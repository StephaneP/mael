import puppeteer from "puppeteer";
import data from "../data/basicProjects";

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
  });
  await Promise.all(
    data.map(async (d) => {
      const name = d.github.split("/").pop();
      try {
        const page = await browser.newPage();
        await page.goto(d.url, { waitUntil: "networkidle0", timeout: 60000 });
        await page.setViewport({ width: 1920, height: 1080 });
        await page.screenshot({
          path: `./assets/projects/${name}.png`,
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
