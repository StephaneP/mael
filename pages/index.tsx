import Link from "next/link";
import FancyCard from "../components/atoms/FancyCard";
import Socials from "../components/atoms/Socials";
import CardContainer from "../components/atoms/CardContainer";
import Card from "../components/atoms/Card";
import Timeline from "../components/atoms/Timeline";
import PageWrapper from "../components/atoms/PageWrapper";
import { frontMatter as postsPages } from "./posts/*.mdx";
import styles from "../styles/index.module.css";

export default function IndexPage() {
  return (
    <>
      <FancyCard />
      <Socials />
      <div className={styles.bottom}>
        <PageWrapper>
          <CardContainer>
            {postsPages.map((page) => (
              <Card key={page.__resourcePath}>
                <Link href={formatPath(page.__resourcePath)}>
                  <a>
                    <div>{page.title}</div>
                    <div>{page.datetime}</div>
                    <div>{page.readingTime.text}</div>
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
      </div>
    </>
  );
}

function formatPath(p) {
  return p.replace(/\.mdx$/, "");
}
