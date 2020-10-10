import { PropsWithChildren } from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../../Header";
import { PostMeta } from "../../../util/staticProps/posts";
import getPostCard from "../../../util/getPostCard";
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
        <div className={styles.topbar}>
          <Link href="/posts">
            <a title="Back to posts">
              <span role="img" aria-label="Back to posts">
                ⬅️
              </span>
            </a>
          </Link>
          <h1 className={styles.title}>{meta.title}</h1>
        </div>
        {meta.draft ? (
          <div className={styles.wipWarning}>
            <div>
              <span role="img" aria-label="Warning">
                ⚠️
              </span>
              This post is a work in progress
              <span role="img" aria-label="Warning">
                ⚠️
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        {children}
      </div>
    </>
  );
}
