import { PropsWithChildren } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../Header";
import { PostMeta } from "../../util/staticProps/posts";
import getPostCard from "../../util/getPostCard";
import styles from "./Post.module.css";

export default function Post({
  children,
  meta,
}: PropsWithChildren<{ meta: PostMeta }>) {
  return (
    <>
      <NextSeo
        title={`Matt Elphick | ${meta.title}`}
        openGraph={{
          title: `Matt Elphick | ${meta.title}`,
          images: [{ url: getPostCard(meta.title) }],
        }}
      />
      <Header />
      <div className={styles.wrapper}>
        <Link href="/posts">
          <a>Back to posts</a>
        </Link>
        <div>{meta.title}</div>
        {children}
      </div>
    </>
  );
}
