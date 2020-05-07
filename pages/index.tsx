import Link from "next/link";
import FancyCard from "../components/atoms/FancyCard";
import Socials from "../components/atoms/Socials";
import CardContainer from "../components/atoms/CardContainer";
import Card from "../components/atoms/Card";
import Timeline from "../components/atoms/Timeline";
import PageWrapper from "../components/atoms/PageWrapper";
import { frontMatter as postsPages } from "./posts/*.mdx";
import styles from "../styles/pages/index.module.css";

export default function IndexPage() {
  return (
    <>
      <FancyCard />
      <Socials />
      <main className={styles.bottom}>
        <PageWrapper>
          <CardContainer>
            {postsPages.map((page) => (
              <Card key={page.__resourcePath}>
                <Link href={page.slug}>
                  <a title={page.title}>
                    <div className={styles.card}>
                      <div className={styles.cardTop}>
                        <div className={styles.cardReadingTime}>{page.readingTime.text}</div>
                        <div className={styles.cardDatetime}>{page.datetime}</div>
                      </div>
                      <div className={styles.cardTitle}>{page.title}</div>
                    </div>
                  </a>
                </Link>
              </Card>
            ))}
          </CardContainer>
          <Timeline
            items={[
              { title: "Threads Styling", description: "Yes" },
              { title: "MailOnline", description: "More" },
              { title: "Clock Limited", description: "What" },
            ]}
          />
          <Timeline
            items={[
              { title: "Year 1", description: "Yes" },
              { title: "Year 2", description: "Yes" },
              { title: "Year 3", description: "Yes" },
              { title: "Year 4", description: "Yes" },
              { title: "Year 5", description: "Yes" },
            ]}
          />
        </PageWrapper>
      </main>
    </>
  );
}
