import { PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { Meta } from "../../../../util/staticProps/book";
import getPostCard from "../../../../util/getPostCard";
import TableOfContentsDataRaw from "./contents";

export default function GibberishPage(
  props: PropsWithChildren<{ meta: Meta }>
) {
  const { meta, children } = props;
  return (
    <>
      <NextSeo
        title={`${meta.book} | ${meta.title}`}
        openGraph={{
          title: `${meta.book} | ${meta.title}`,
          images: [{ url: getPostCard(`${meta.book} | ${meta.title}`) }],
        }}
      />
      {meta.book}
      <TableOfContents />
      {children}
    </>
  );
}

interface TableOfContentsSection {
  name: string;
  url?: string;
  sections?: TableOfContentsData;
}

type TableOfContentsData = {
  [k: number]: TableOfContentsSection;
};

function TableOfContents() {
  const data: TableOfContentsData = TableOfContentsDataRaw;
  return (
    <div>
      {Object.entries(data).map(([k, v]) => (
        <Block key={k} v={v} />
      ))}
    </div>
  );
}

function Block({ v }: { v: TableOfContentsSection }) {
  const router = useRouter();
  return (
    <div>
      <div>
        <Link href={v.url}>
          <a style={router.pathname === v.url ? { color: "red" } : {}}>
            {v.name}
          </a>
        </Link>
      </div>
      <div style={{ marginLeft: 20 }}>
        {Object.entries(v.sections || {}).map(([k2, v2]) => (
          <Block key={k2} v={v2} />
        ))}
      </div>
    </div>
  );
}
