import { promises as fs } from "fs";
import { join } from "path";
import getAnalytics from "../util/staticProps/analytics";

let existingData = {};
const dataPath = join(__dirname, "..", "data", "analytics.json");

try {
  // eslint-disable-next-line import/no-dynamic-require
  existingData = require(dataPath);
} catch {
  // Do nothing
}

function isDifferent(a: any, b: any) {
  return (
    !a.analytics ||
    !b.analytics ||
    JSON.stringify(a.analytics) !== JSON.stringify(b.analytics)
  );
}

async function run() {
  const result = await getAnalytics();
  if (isDifferent(existingData, result)) {
    await fs.writeFile(dataPath, JSON.stringify(result, undefined, 2));
    console.info("Finished writing update");
  } else {
    console.warn("Skipping write, no differences");
  }
}

run();
