const title = "Matt Elphick | Software Engineer";
const description = "Software engineer mainly messing around with JavaScript.";
const url = "https://mael.tech/";

module.exports = {
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
  },
  twitter: {
    handle: "@maelphy",
    site: "@maelphy",
    cardType: "summary_large_image",
  },
};
