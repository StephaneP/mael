import Link from "next/link";
import FancyCard from "../components/atoms/FancyCard";
import Socials from "../components/atoms/Socials";
import CardContainer from "../components/atoms/CardContainer";
import Card from "../components/atoms/Card";
import Timeline from "../components/atoms/Timeline";
import PageWrapper from "../components/atoms/PageWrapper";
import Datetime from "../components/atoms/Datetime";
import { sortDates } from "../util";
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
            {postsPages.sort(sortDates("createdAt")).map((page) => (
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
          </CardContainer>
          <Timeline
            items={[
              {
                key: "thrds-1",
                title: (
                  <>
                    <em>Threads Styling</em> London | Software Engineer
                  </>
                ),
                description: <>August 2018 - Present</>,
                icon: "/images/company/logos/threads-styling.png",
              },
              {
                key: "mo-2",
                title: (
                  <>
                    <em>MailOnline</em> London | Software Engineer
                  </>
                ),
                description: <>March 2018 - July 2018</>,
                icon: "/images/company/logos/mailonline.png",
              },
              {
                key: "mo-1",
                title: (
                  <>
                    <em>MailOnline</em> London | Junior Software Engineer
                  </>
                ),
                description: <>July 2017 - March 2018</>,
                icon: "/images/company/logos/mailonline.png",
              },
              {
                key: "clk-2",
                title: (
                  <>
                    <em>Clock Limited</em> Kings Langley | Junior Software Engineer
                  </>
                ),
                description: <>July 2016 - July 2017</>,
                icon: "/images/company/logos/clock.png",
              },
              {
                key: "5",
                title: <>Loughborough University | Computer Science MSci Year 5</>,
                description: (
                  <>
                    <p>2012-2013</p>
                    <p>
                      <em>Thesis:</em> Complex Adaptive Systems and Grouping Behaviour over
                      Evolution
                    </p>
                  </>
                ),
                icon: "/images/company/logos/lboro-uni.png",
              },
              {
                key: "clk-1",
                title: (
                  <>
                    <em>Clock Limited</em> Kings Langley | Placement Software Engineer
                  </>
                ),
                description: <>July 2015 - July 2016</>,
                icon: "/images/company/logos/clock.png",
              },
              {
                key: "3",
                title: <>Loughborough University | Computer Science MSci Year 3</>,
                description: (
                  <>
                    <p>2012-2013</p>
                    <p>
                      <em>Dissertation:</em> Stock Market Prediction using Historical Data and News
                      Information
                    </p>
                  </>
                ),
                icon: "/images/company/logos/lboro-uni.png",
              },
              {
                key: "2",
                title: <>Loughborough University | Computer Science MSci Year 2</>,
                description: (
                  <>
                    <p>2012-2013</p>
                    <p>My second year</p>
                  </>
                ),
                icon: "/images/company/logos/lboro-uni.png",
              },
              {
                key: "1",
                title: <>Loughborough University | Computer Science MSci Year 1</>,
                description: (
                  <>
                    <p>2012-2013</p>
                    <p>My first year</p>
                  </>
                ),
                icon: "/images/company/logos/lboro-uni.png",
              },
            ]}
          />
        </PageWrapper>
      </main>
    </>
  );
}
