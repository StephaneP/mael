import Link from "next/link";
import FancyCard from "../components/atoms/FancyCard";
import Socials from "../components/atoms/Socials";
import TechLogo from "../components/atoms/TechLogo";
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
                    <p>
                      <em>Threads Styling</em> London | Software Engineer
                    </p>
                  </>
                ),
                description: (
                  <>
                    <p className={styles.datetime}>August 2018 - Present</p>
                    <div className={styles.techContainer}>
                      <TechLogo name="nodejs" />
                      <TechLogo name="js" />
                      <TechLogo name="react" />
                      <TechLogo name="react-native" />
                      <TechLogo name="jira" />
                      <TechLogo name="splunk" />
                      <TechLogo name="postgresql" />
                      <TechLogo name="sentry" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                      <TechLogo name="aws" />
                      <TechLogo name="terraform" />
                      <TechLogo name="circleci" />
                      <TechLogo name="graphql" />
                      <TechLogo name="typescript" />
                      <TechLogo name="jest" />
                      <TechLogo name="webpack" />
                      <TechLogo name="yarn" />
                      <TechLogo name="npm" />
                      <TechLogo name="docker" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/threads-styling.png",
              },
              {
                key: "mo-2",
                title: (
                  <>
                    <em>MailOnline</em> London | Software Engineer
                  </>
                ),
                description: (
                  <>
                    <p className={styles.datetime}>March 2018 - July 2018</p>
                    <div className={styles.techContainer}>
                      <TechLogo name="react" />
                      <TechLogo name="nodejs" />
                      <TechLogo name="js" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                      <TechLogo name="rabbitmq" />
                      <TechLogo name="teamcity" />
                      <TechLogo name="npm" />
                      <TechLogo name="redis" />
                      <TechLogo name="splunk" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/mailonline.png",
              },
              {
                key: "mo-1",
                title: (
                  <>
                    <em>MailOnline</em> London | Junior Software Engineer
                  </>
                ),
                description: (
                  <>
                    <p className={styles.datetime}>July 2017 - March 2018</p>
                    <div className={styles.techContainer}>
                      <TechLogo name="nodejs" />
                      <TechLogo name="js" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                      <TechLogo name="rabbitmq" />
                      <TechLogo name="teamcity" />
                      <TechLogo name="npm" />
                      <TechLogo name="redis" />
                      <TechLogo name="splunk" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/mailonline.png",
              },
              {
                key: "clk-2",
                title: (
                  <>
                    <em>Clock Limited</em> Kings Langley | Junior Software Engineer
                  </>
                ),
                description: (
                  <>
                    <p className={styles.datetime}>July 2016 - July 2017</p>
                    <div className={styles.techContainer}>
                      <TechLogo name="nodejs" />
                      <TechLogo name="js" />
                      <TechLogo name="react" />
                      <TechLogo name="mongodb" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                      <TechLogo name="backbone" />
                      <TechLogo name="jade" />
                      <TechLogo name="freshdesk" />
                      <TechLogo name="php" />
                      <TechLogo name="mysql" />
                      <TechLogo name="drone" />
                      <TechLogo name="mocha" />
                      <TechLogo name="npm" />
                      <TechLogo name="gulp" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/clock.png",
              },
              {
                key: "5",
                title: <>Loughborough University | Computer Science MSci Year 5</>,
                description: (
                  <>
                    <p className={styles.datetime}>2012-2013</p>
                    <p>
                      <em>Thesis:</em> Complex Adaptive Systems and Grouping Behaviour over
                      Evolution
                    </p>
                    <div className={styles.techContainer}>
                      <TechLogo name="python" />
                      <TechLogo name="docker" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                    </div>
                    <p>
                      <em>evoto</em>
                    </p>
                    <div className={styles.techContainer}>
                      <TechLogo name="react" />
                      <TechLogo name="blockchain" />
                      <TechLogo name="multichain" />
                      <TechLogo name="csharp" />
                      <TechLogo name="wpf" />
                      <TechLogo name="webpack" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                    </div>
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
                description: (
                  <>
                    <p className={styles.datetime}>July 2015 - July 2016</p>
                    <div className={styles.techContainer}>
                      <TechLogo name="nodejs" />
                      <TechLogo name="js" />
                      <TechLogo name="mongodb" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                      <TechLogo name="backbone" />
                      <TechLogo name="jade" />
                      <TechLogo name="freshdesk" />
                      <TechLogo name="php" />
                      <TechLogo name="mysql" />
                      <TechLogo name="drone" />
                      <TechLogo name="mocha" />
                      <TechLogo name="npm" />
                      <TechLogo name="gulp" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/clock.png",
              },
              {
                key: "3",
                title: <>Loughborough University | Computer Science MSci Year 3</>,
                description: (
                  <>
                    <p className={styles.datetime}>2012-2013</p>
                    <p>
                      <em>Dissertation:</em> Stock Market Prediction using Historical Data and News
                      Information
                    </p>
                    <div className={styles.techContainer}>
                      <TechLogo name="nodejs" />
                      <TechLogo name="js" />
                      <TechLogo name="mongodb" />
                      <TechLogo name="git" />
                      <TechLogo name="github" />
                      <TechLogo name="jade" />
                    </div>
                    <p>
                      <em>Other:</em>
                    </p>
                    <div className={styles.techContainer}>
                      <TechLogo name="java" />
                      <TechLogo name="android" />
                      <TechLogo name="aspnet" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/lboro-uni.png",
              },
              {
                key: "2",
                title: <>Loughborough University | Computer Science MSci Year 2</>,
                description: (
                  <>
                    <p className={styles.datetime}>2012-2013</p>
                    <p>My second year</p>
                    <div className={styles.techContainer}>
                      <TechLogo name="mysql" />
                      <TechLogo name="java" />
                      <TechLogo name="ruby" />
                      <TechLogo name="haskell" />
                    </div>
                  </>
                ),
                icon: "/images/company/logos/lboro-uni.png",
              },
              {
                key: "1",
                title: <>Loughborough University | Computer Science MSci Year 1</>,
                description: (
                  <>
                    <p className={styles.datetime}>2012-2013</p>
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
