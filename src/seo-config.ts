import getPostCard from "./util/getPostCard";

const title = "Matt Elphick";
const description = "Just a guy messing around with JavaScript.";
const url = "https://mael.tech/";

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    title,
    description,
    url,
    site_name: title,
    type: "website",
    locale: "en_GB",
    images: [{ url: getPostCard(title) }],
  },
  twitter: {
    handle: "@mattaelphick",
    site: "@mattaelphick",
    cardType: "summary_large_image",
  },
};
