import { NextSeo } from "next-seo";
import getPostCard from "../../util/getPostCard";

export default function MetaCard({ title = "" }: { title: string }) {
  const fullTitle = ["Matt Elphick", title].filter(Boolean).join(" | ");
  return (
    <NextSeo
      title={fullTitle}
      openGraph={{
        title: fullTitle,
        images: [{ url: getPostCard(title) }],
      }}
    />
  );
}
