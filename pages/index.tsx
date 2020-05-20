import { FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import PageWrapper from "../components/atoms/PageWrapper";
import PostsSection from "../components/compositions/Posts";
import TimelineSection from "../components/compositions/Timeline";
import ProjectsSection from "../components/compositions/Projects";
import styles from "../styles/pages/index.module.css";

export default function IndexPage() {
  return (
    <>
      <div className={styles.top}>
        <PageWrapper style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <>
            <div className={styles.topTitleWrapper}>
              <b className={styles.topTitle}>Matt Elphick</b>
              <span className={styles.topSubtitle}>Software Engineer</span>
            </div>
            <div className={styles.socialWrapper}>
              <a href="https://github.com/maael" title="GitHub | maael">
                <div
                  className={styles.socialItem}
                  style={{ backgroundColor: "var(--github-grey)", color: "#000000" }}
                >
                  <FaGithubAlt />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/melphick/" title="LinkedIn | melphick">
                <div
                  className={styles.socialItem}
                  style={{ backgroundColor: "var(--linkedin-blue)" }}
                >
                  <FaLinkedin />
                </div>
              </a>
              <a
                href="mailto:matthew.a.elphick@gmail.com"
                title="Email | matthew.a.elphick@gmail.com"
              >
                <div className={styles.socialItem} style={{ backgroundColor: "var(--email)" }}>
                  <FaEnvelope />
                </div>
              </a>
            </div>
          </>
        </PageWrapper>
      </div>
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
        <div className={styles.sectionTitle}>Work and Stuff</div>
      </div>
      <TimelineSection />
    </>
  );
}
