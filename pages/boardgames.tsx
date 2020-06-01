import Link from "next/link";
import PageWrapper from "../components/atoms/PageWrapper";
import styles from "../styles/pages/posts.module.css";
import Boardgames from "../components/compositions/Boardgames";

export default function BoardgamesPage() {
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
            <div className={styles.header}>🎲 Boardgames</div>
          </div>
        </PageWrapper>
      </div>
      <div className={styles.content}>
        <PageWrapper>
          <Boardgames />
        </PageWrapper>
      </div>
    </>
  );
}
