import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageWrapper from "../components/atoms/PageWrapper";
import Datetime from "../components/atoms/Datetime";
import { FrontMatter } from "../types";
import styles from "../styles/layouts/blogPost.module.css";

export default (frontMatter: FrontMatter) => {
  const api = "https://i.microlink.io/";
  const cardUrl = `https://cards.microlink.io/?preset=rauchg&logo=https%3A%2F%2Fmael.tech%2Fimages%2Fme.jpeg&domain=mael.tech&color=%23fd015d&bg=%23202020&title=${frontMatter.title}`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;
  return ({ children: content }) => {
    return (
      <div>
        <Head>
          <link rel="preload" href="/css/prism.css" as="style" />
          <link rel="stylesheet" href="/css/prism.css" />
        </Head>
        <NextSeo
          title={`Matt Elphick | ${frontMatter.title}`}
          canonical={`${frontMatter.domain}${frontMatter.slug}`}
          openGraph={{
            title: `Matt Elphick | ${frontMatter.title}`,
            url: `${frontMatter.domain}${frontMatter.slug}`,
            images: [{ url: image }],
          }}
        />
        <div className={styles.headerContainer}>
          <PageWrapper>
            <div className={styles.header}>
              <h1 className={styles.title}>{frontMatter.title}</h1>
              <h2 className={styles.time}>
                <Datetime>{frontMatter.createdAt}</Datetime> - {frontMatter.readingTime.text}
              </h2>
              <Link href="/">
                <a>
                  <div className={styles.back}>Back</div>
                </a>
              </Link>
              {frontMatter.tags.map((t) => (
                <Link href={`/posts?tag=${t}`} key={t}>
                  <a>
                    <div className={styles.tag}>{t}</div>
                  </a>
                </Link>
              ))}
            </div>
          </PageWrapper>
        </div>
        <div className={styles.content}>
          <PageWrapper>{content}</PageWrapper>
        </div>
      </div>
    );
  };
};
