import { NextSeo } from "next-seo";
import getPostCard from "../../util/getPostCard";

export default function MetaCard({ title }: { title: string }) {
  return (
    <NextSeo
      title={`Matt Elphick | ${title}`}
      openGraph={{
        title: `Matt Elphick | ${title}`,
        images: [{ url: getPostCard(title) }],
      }}
    />
  );
}
