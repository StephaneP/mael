import useSWR from "swr";
import getPosts, { PostProps } from "../util/staticProps/posts";
import Header from "../components/Header";
import PostsList from "../components/PostsList";
import ProjectCard from "../components/ProjectCard";
import styles from "./shared.module.css";
import projects from "../data/projects";

export default function Home({ posts }: { posts: PostProps[] }) {
  const { data: analytics = {} } = useSWR("/api/fathom");
  return (
    <div>
      <Header isRoot />
      <div className={styles.container}>
        <div className={styles.utilHideOnDesktop}>
          <div className={styles.mobileDesc}>
            Hey, I’m Matt, a full-stack developer who enjoys working with people
            to make products to solve problems.
          </div>
        </div>
        <p className={styles.contentHeader}>Recent Posts</p>
        <PostsList posts={posts} limit={5} />
        <p className={styles.contentHeader}>Recent Projects</p>
        {projects.map((p) => (
          <ProjectCard {...p} key={p.github} analytics={analytics[p.url]} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { ...(await getPosts()) } };
}
