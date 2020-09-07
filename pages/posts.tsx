import { useMemo, useState } from "react";
import classnames from "classnames";
import getPosts, { PostProps } from "../util/staticProps/posts";
import Header from "../components/Header";
import PostsList from "../components/PostsList";
import sharedStyles from "./shared.module.css";
import styles from "./posts.module.css";

const HeaderTrim = require("../assets/HeaderTrim.svg");

export default function Posts({
  posts,
  tags,
}: {
  posts: PostProps[];
  tags: string[];
}) {
  const [search, setSearch] = useState("");
  const [selectedTags, setTags] = useState([]);
  const filteredPosts = useMemo(
    () =>
      posts
        .filter((p) =>
          selectedTags.length
            ? selectedTags.some((t) => (p.meta.tags || "").includes(t))
            : true
        )
        .filter((p) =>
          search
            ? p.meta.title.toLowerCase().includes(search.toLowerCase())
            : true
        ),
    [search, selectedTags]
  );
  return (
    <>
      <Header />
      <div className={sharedStyles.container}>
        <div>
          <input
            placeholder="Search..."
            type="text"
            className={styles.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img src={HeaderTrim} alt="trim" className={styles.searchTrim} />
        </div>
        <div className={styles.tags}>
          {tags.map((t) => (
            <button
              type="button"
              className={classnames(styles.tag, {
                [styles.active]: selectedTags.includes(t),
              })}
              key={t}
              onClick={() => {
                setTags((ta) => {
                  return ta.includes(t)
                    ? ta.filter((i) => i !== t)
                    : ta.concat(t);
                });
              }}
            >
              {t}
            </button>
          ))}
        </div>
        <PostsList posts={filteredPosts} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return { props: { ...(await getPosts()) } };
}
