import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CardContainer from "../../components/atoms/CardContainer";
import Card from "../../components/atoms/Card";
import PageWrapper from "../../components/atoms/PageWrapper";
import Datetime from "../../components/atoms/Datetime";
import { sortDates } from "../../util";
import { frontMatter as postsPages } from "../posts/*.mdx";
import styles from "../../styles/pages/posts.module.css";

export default function PostsPage() {
  const tags = useMemo(
    () => [...new Set(postsPages.map((page) => page.tags).reduce((acc, ar) => acc.concat(ar), []))],
    []
  );
  const router = useRouter();
  const filteredPages = useMemo(
    () =>
      router.query.tag
        ? postsPages.filter((t) => t.tags.includes(router.query.tag as string))
        : postsPages,
    [postsPages, tags, router.query]
  );
  return (
    <>
      <div className={styles.headerContainer}>
        <PageWrapper>
          <div>
            <Link href="/">
              <a>
                <div className={styles.back}>Back</div>
              </a>
            </Link>
            <div className={styles.header}>Posts</div>
          </div>
        </PageWrapper>
      </div>
      <div className={styles.content}>
        <PageWrapper>
          <div className={styles.tagContainer}>
            {tags.map((t) => (
              <div
                key={t}
                className={router.query.tag === t ? styles.activeTag : styles.tag}
                onClick={() => {
                  router.push(
                    `${router.pathname}${router.query.tag === t ? "" : `?tag=${t}`}`,
                    undefined,
                    { shallow: true }
                  );
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <CardContainer>
            {filteredPages.sort(sortDates("createdAt")).map((page) => (
              <Card key={page.__resourcePath}>
                <Link href={page.slug}>
                  <a title={page.title}>
                    <div className={styles.card}>
                      <div className={styles.cardTop}>
                        <div className={styles.cardReadingTime}>{page.readingTime.text}</div>
                        <div className={styles.cardDatetime}>
                          <Datetime>{page.createdAt}</Datetime>
                        </div>
                      </div>
                      <div className={styles.cardTitle}>{page.title}</div>
                    </div>
                  </a>
                </Link>
              </Card>
            ))}
          </CardContainer>
        </PageWrapper>
      </div>
    </>
  );
}
