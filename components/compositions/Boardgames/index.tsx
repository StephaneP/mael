import useSWR from "swr";
import fetch from "cross-fetch";
import styles from "./styles.module.css";
import { BggResponse } from "../../../types";

export default function () {
  const { data } = useSWR<BggResponse>("/api/external?type=bgg", async (key) => {
    const res = await fetch(key);
    return res.json();
  });
  return data ? (
    <div className={styles.container}>
      {data.items.item.map(({ name, objectid, thumbnail, subtype }) => (
        <a
          key={objectid}
          className={styles.card}
          href={`https://boardgamegeek.com/${subtype}/${objectid}`}
        >
          <img src={thumbnail} className={styles.cardImage} />
          <div className={styles.cardTitle}>{name.$t}</div>
        </a>
      ))}
    </div>
  ) : null;
}
