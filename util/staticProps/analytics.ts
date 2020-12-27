import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer";

const FATHOM_BASE = "https://app.usefathom.com";

const { FATHOM_EMAIL, FATHOM_PASSWORD } = process.env;

const siteIdMap: { [k: string]: number } = {
  "https://bopsy.mael.tech": 38692,
  "https://dedupe.mael.tech": 24899,
  "https://mael.tech": 26489,
  "https://nook.services": 21515,
  "https://tem.tools": 21960,
  "https://vidhydra.mael.tech": 31172,
};

async function getCount(page: puppeteer.Page, idx: number) {
  let num = 0;
  try {
    const views = await page.evaluate(
      (i) => document.querySelectorAll(".totals-amount")[i]?.textContent,
      [idx]
    );
    if (views) {
      num = Number(views);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(num)) {
        num = 0;
      }
    }
  } catch (e) {
    console.error("[getCount]", e);
  }
  return num;
}

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function getCounts(page: puppeteer.Page, id: number) {
  const data = { uniques: 0, views: 0, id };
  try {
    await page.goto(
      `https://app.usefathom.com/#/?range=last_30_days&site=${id}`
    );
    await page.waitForNavigation();
    await wait(3000);
    const [uniques, views] = await Promise.all([
      getCount(page, 0),
      getCount(page, 1),
    ]);
    data.uniques = uniques;
    data.views = views;
  } catch (e) {
    console.error("[getCounts]", e);
  }
  return data;
}

async function getData(instance: puppeteer.Browser) {
  const data = {};
  try {
    const page = await instance.newPage();
    await page.goto(`${FATHOM_BASE}/login`);
    await page.type('input[name="email"]', FATHOM_EMAIL);
    await page.type('input[name="password"]', FATHOM_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    for (const [name, id] of Object.entries(siteIdMap)) {
      data[name] = await getCounts(page, id);
    }
  } catch (e) {
    console.error("[getData]", e);
  }
  return data;
}

export default async function getAnalytics() {
  let instance: puppeteer.Browser;
  let data = {};
  try {
    instance = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: false,
      ignoreHTTPSErrors: true,
    });
    data = await getData(instance);
  } catch (e) {
    console.error("[run]", e);
  } finally {
    if (instance) instance.close();
  }
  return { analytics: data, updatedAt: new Date().toISOString() };
}
