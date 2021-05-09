import { capitalize } from "./strings";

export default function getPostCard(t: string) {
  const title = capitalize(t);
  const api = "https://i.microlink.io/";
  const cardUrl = `https://cards.microlink.io/?preset=rauchg&logo=https%3A%2F%2Fmael.tech%2Fimages%2Fme.jpeg&domain=mael.tech&color=%23fd015d&bg=%23202020&title=${title}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;
  return image;
}
