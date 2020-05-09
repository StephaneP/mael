import { FC } from "react";
import Timeline from "../../atoms/Timeline";
import TechLogo from "../../atoms/TechLogo";
import styles from "./styles.module.css";

const TimelineSection: FC = () => {
  return (
    <>
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
                  <TechLogo name="travisci" />
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
                  <p>Group Project - evoto</p>
                  <p>Learning Evaluation in a Specialised Subject</p>
                  <p>Managing a Project Team</p>
                  <p>Introduction to E-Business</p>
                  <p>Thesis Project</p>
                </p>
                <p>
                  <em>Thesis:</em> Complex Adaptive Systems and Grouping Behaviour over Evolution
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
                  <TechLogo name="travisci" />
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
                  <p>Advanced Artificial Intelligence Systems</p>
                  <p>Advanced Human-Computer Interaction</p>
                  <p>Advanced Networking</p>
                  <p>Agent-Based Systems</p>
                  <p>Algorithm Analysis</p>
                  <p>Cryptography and Network Security</p>
                  <p>Data Mining</p>
                  <p>Mobile Application Development</p>
                  <p>Software Project Management</p>
                </p>
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
                <p>
                  <p>2D Computer Graphics</p>
                  <p>AI Methods</p>
                  <p>Advanced Web Programming</p>
                  <p>Formal Languages and Theory of Computation</p>
                  <p>Formal Specification</p>
                  <p>Legal and Professional Issues in Computing</p>
                  <p>Operating Systems, Networks and the Internet 1</p>
                  <p>Operating Systems, Networks and the Internet 2</p>
                  <p>Professional Training Preparation</p>
                  <p>Requirements Engineering</p>
                  <p>Team Projects</p>
                </p>
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
                <p>
                  <p>Computer Systems</p>
                  <p>Databases</p>
                  <p>Essential Skills for Computing</p>
                  <p>Logic and Functional Programming</p>
                  <p>Mathematics for Computer Science</p>
                  <p>Object Oriented Programming and Algorithms</p>
                  <p>Programming for the WWW</p>
                  <p>Server Side Programming</p>
                </p>
              </>
            ),
            icon: "/images/company/logos/lboro-uni.png",
          },
        ]}
      />
    </>
  );
};

export default TimelineSection;
