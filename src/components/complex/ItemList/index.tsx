import Link from "next/link";
import classnames from "classnames";
import Post from "../PostItem";
import styles from "./ItemList.module.css";

export default function ItemList<T extends { frontmatter: { title: string } }>({
  title,
  items,
  limit = 2,
  moreUrl,
  Component = Post,
}: {
  title?: string;
  items: T[];
  limit?: number;
  moreUrl?: string;
  Component?: ({ item: T, index: number }) => JSX.Element;
}) {
  return items.length > 0 ? (
    <section className={styles.sectionContainer}>
      {title ? (
        moreUrl ? (
          <Link href={moreUrl}>
            <a className={styles.sectionHeader}>{title}</a>
          </Link>
        ) : (
          <h2 className={classnames(styles.sectionHeader, "p-0")}>{title}</h2>
        )
      ) : null}
      {items.slice(0, limit).map((item, idx) => (
        <Component key={item.frontmatter.title} item={item} index={idx} />
      ))}
      {moreUrl && items.length > limit ? (
        <Link href={moreUrl}>
          <a className="text-center text-white w-full">
            See More{title ? ` ${title} ` : ""}({items.length} items) →
          </a>
        </Link>
      ) : null}
    </section>
  ) : null;
}
