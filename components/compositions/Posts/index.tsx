import { FC } from "react";
import Link from "next/link";
import CardContainer from "../../atoms/CardContainer";
import Card from "../../atoms/Card";
import Datetime from "../../atoms/Datetime";
import { sortDates } from "../../../util";
import { frontMatter as postsPages } from "../../../pages/posts/*.mdx";
import styles from "./styles.module.css";

const MAX = 5;

const Posts: FC = () => {
  return (
    <>
      <CardContainer>
        {postsPages
          .sort(sortDates("createdAt"))
          .slice(0, MAX)
          .map((page) => (
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
        {postsPages.length > MAX ? (
          <Card>
            <Link href="/posts">
              <a title="More posts">
                <div className={styles.readMore}>
                  <div className={styles.readMoreArrow}>⇨</div>
                  <div className={styles.cardTitle}>
                    {postsPages.length - MAX} more post{postsPages.length - MAX === 1 ? "" : "s"}
                  </div>
                </div>
              </a>
            </Link>
          </Card>
        ) : null}
      </CardContainer>
    </>
  );
};

export default Posts;
