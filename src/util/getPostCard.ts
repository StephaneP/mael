import { capitalize } from "./strings";

export default function getPostCard(t: string) {
  const title = capitalize(t);
  const api = "https://i.microlink.io/";
  const cardUrl = `https://cards.microlink.io/?preset=rauchg&logo=https%3A%2F%2Fmael.tech%2Fimages%2Fpaw_programming.jpg&domain=mael.tech&color=%23db2777&bg=%231f2937&title=${title}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;
  return image;
}
