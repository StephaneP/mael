import fetch from "cross-fetch";
import parser from "xml2json";
import { NextApiRequest, NextApiResponse } from "next";

async function boardgamegeek(req: NextApiRequest, res: NextApiResponse) {
  const fetchRes = await fetch(
    "https://www.boardgamegeek.com/xmlapi2/collection?username=maael&own=1"
  );
  if (fetchRes.ok) {
    const body = await fetchRes.text();
    const json = parser.toJson(body);
    res.json(json);
  } else {
    res.status(500).send("Error getting bgg");
  }
}

const typeMap = {
  bgg: boardgamegeek,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const type = req.query.type as string | undefined;
  if (typeMap[type]) {
    try {
      await typeMap[type](req, res);
    } catch (e) {
      res.status(500).send(e.message);
    }
  } else {
    res.status(400).send("Missing type");
  }
}
