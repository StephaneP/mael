import { FC } from "react";
import Timeline from "../../atoms/Timeline";
import TechLogo from "../../atoms/TechLogo";
import Separator from "../../atoms/Separator";
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
                <Separator label="Tech" />
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
                  <TechLogo name="apollo" />
                  <TechLogo name="typescript" />
                  <TechLogo name="jest" />
                  <TechLogo name="webpack" />
                  <TechLogo name="yarn" />
                  <TechLogo name="npm" />
                  <TechLogo name="docker" />
                  <TechLogo name="auth0" />
                  <TechLogo name="chromatic" />
                  <TechLogo name="storybook" />
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
                <Separator label="Tech" />
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
                <Separator label="Tech" />
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
                <Separator label="Tech" />
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
                <Separator label="Modules" />
                <ul>
                  <li>Group Project - evoto</li>
                  <li>Learning Evaluation in a Specialised Subject</li>
                  <li>Managing a Project Team</li>
                  <li>Introduction to E-Business</li>
                  <li>Thesis Project</li>
                </ul>
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
                <Separator label="Tech" />
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
                <Separator label="Modules" />
                <ul>
                  <li>Advanced Artificial Intelligence Systems</li>
                  <li>Advanced Human-Computer Interaction</li>
                  <li>Advanced Networking</li>
                  <li>Agent-Based Systems</li>
                  <li>Algorithm Analysis</li>
                  <li>Cryptography and Network Security</li>
                  <li>Data Mining</li>
                  <li>Mobile Application Development</li>
                  <li>Software Project Management</li>
                </ul>
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
                <Separator label="Modules" />
                <ul>
                  <li>2D Computer Graphics</li>
                  <li>AI Methods</li>
                  <li>Advanced Web Programming</li>
                  <li>Formal Languages and Theory of Computation</li>
                  <li>Formal Specification</li>
                  <li>Legal and Professional Issues in Computing</li>
                  <li>Operating Systems, Networks and the Internet 1</li>
                  <li>Operating Systems, Networks and the Internet 2</li>
                  <li>Professional Training Preparation</li>
                  <li>Requirements Engineering</li>
                  <li>Team Projects</li>
                </ul>
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
                <Separator label="Modules" />
                <ul>
                  <li>Computer Systems</li>
                  <li>Databases</li>
                  <li>Essential Skills for Computing</li>
                  <li>Logic and Functional Programming</li>
                  <li>Mathematics for Computer Science</li>
                  <li>Object Oriented Programming and Algorithms</li>
                  <li>Programming for the WWW</li>
                  <li>Server Side Programming</li>
                </ul>
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
