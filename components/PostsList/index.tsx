import Link from "next/link";
import { PostProps } from "../../util/staticProps/posts";
import styles from "./styles.module.css";

export default function PostsList({
  posts,
  limit,
}: {
  posts: PostProps[];
  limit?: number;
}) {
  return (
    <>
      {posts.slice(0, limit).map(({ slug, meta }) => (
        <Link href={slug} key={slug}>
          <a>
            <div className={styles.post}>
              <div className={styles.postLeft}>
                <div className={styles.postTitle}>{meta.title}</div>
                <div>Read More →</div>
              </div>
              <div className={styles.postRight}>
                <div>{meta.createdAt}</div>
                <div>{meta.readingTime.text}</div>
              </div>
            </div>
          </a>
        </Link>
      ))}
      {posts.length > limit ? (
        <Link href="/posts">
          <a>
            <div className={styles.post}>
              <div className={styles.readMore}>
                <div>More Posts →</div>
              </div>
            </div>
          </a>
        </Link>
      ) : null}
    </>
  );
}
