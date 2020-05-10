import FancyCard from "../components/atoms/FancyCard";
import Socials from "../components/atoms/Socials";
import PageWrapper from "../components/atoms/PageWrapper";
import PostsSection from "../components/compositions/Posts";
import TimelineSection from "../components/compositions/Timeline";
import ProjectsSection from "../components/compositions/Projects";
import styles from "../styles/pages/index.module.css";

export default function IndexPage() {
  return (
    <>
      <FancyCard />
      <Socials />
      <main className={styles.bottom}>
        <PageWrapper>
          <Sections />
        </PageWrapper>
      </main>
    </>
  );
}

function Sections() {
  return (
    <>
      <div className={styles.sectionSelect}>
        <div className={styles.sectionTitle}>Posts</div>
      </div>
      <PostsSection />
      <div className={styles.sectionSelect}>
        <div className={styles.sectionTitle}>Personal Projects</div>
      </div>
      <ProjectsSection />
      <div className={styles.sectionSelect}>
        <div className={styles.sectionTitle}>Timeline</div>
      </div>
      <TimelineSection />
    </>
  );
}
