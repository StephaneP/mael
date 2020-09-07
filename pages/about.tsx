import classnames from "classnames";
import Header from "../components/Header";
import Picture from "../components/Picture";
import sharedStyles from "./shared.module.css";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <Header />
      <div
        className={classnames(sharedStyles.container, styles.containerBottom)}
      >
        <div>
          <Picture
            src={require("../public/images/me.jpg")}
            alt="My face"
            className={styles.face}
            webp={require("../public/images/me.jpg?webp")}
            mime="image/jpeg"
          />
          <div className={sharedStyles.contentHeader}>Who am I?</div>
          <p className={styles.p}>
            Hi, I’m Matt, I’m a full-stack developer who uses JavaScript and a
            bunch of other things to help make products to solve problems for
            people. I’m passionate about viewing the code I write in the bigger
            picture, helping with crafting the requirements for it, getting my
            hands dirty and coding it, and then monitoring it after release, and
            helping push for adoption and usage.
          </p>
          <p className={styles.p}>
            I’m currently working at Threads Styling, using JavaScript,
            TypeScript, React, React Native, GraphQL, Koa, Terraform, AWS, and
            other things to help make tools to make our staffs lives easier,
            automating whatever can be automated to save them time.
          </p>
          <p className={styles.p}>
            In the past I’ve spent time at MailOnline, working on their internal
            Content Management System, that their writers use to publish
            content. Before that I worked with the fantastic people at Clock,
            helping create bespoke websites and CMS’s for clients such as
            Stonegate Pubs, RibaJ, Wall Street Journal, and Riot Games.
          </p>
          <div className={sharedStyles.contentHeader}>My Timeline</div>
          <p>
            Here’s my timeline in a bit more detail, and how I got to where am I
            today.
          </p>
          <div className={styles.timelineContainer}>
            <Picture
              src={require("../assets/companies/threads-styling.png")}
              alt="Clock Logo"
              className={styles.company}
              webp={require("../assets/companies/threads-styling.png?webp")}
              mime="image/png"
            />
            <div className={styles.timelineInfo}>
              <div className={styles.timelineTitle}>
                <div className={styles.timelineTitleText}>Threads Styling</div>
                <div>2018-2020</div>
              </div>
              <div className={styles.timelineDescription}>
                Software Engineer Senior Software Engineer Worked as part of a
                small team of highly skilled developers to create tools to
                enhance the scalability of the established business.
                <ul>
                  <li>
                    Involved in the hiring process to expand the team, including
                    crafting and implementing the the tech team onboarding
                    process
                  </li>
                  <li>
                    Experience using AWS, Terraform, GraphQL, PostgreSQL,
                    TypeScript, React, React Native
                  </li>
                  <li>
                    Experience leading a small team on an internal project
                  </li>
                  <li>
                    Helped create team wide guidelines and standards, as well as
                    template projects to help kickstart new projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.timelineContainer}>
            <Picture
              src={require("../assets/companies/mailonline.png")}
              alt="Clock Logo"
              className={styles.company}
              webp={require("../assets/companies/mailonline.png?webp")}
              mime="image/png"
            />
            <div className={styles.timelineInfo}>
              <div className={styles.timelineTitle}>
                <div className={styles.timelineTitleText}>Mailonline</div>
                <div>2017-2018</div>
              </div>
              <div className={styles.timelineDescription}>
                Junior Software Engineer Software Engineer Worked on the
                internal CMS platform used by journalists to write content for{" "}
                <a href="https://www.dailymail.co.uk">
                  https://www.dailymail.co.uk
                </a>
                .
                <ul>
                  <li>
                    Investigated approaches to update legacy custom framework
                    incrementally to React based systems
                  </li>
                  <li>Implemented the initial React project in the team</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.timelineContainer}>
            <Picture
              src={require("../assets/companies/clock.png")}
              alt="Clock Logo"
              className={styles.company}
              webp={require("../assets/companies/clock.png?webp")}
              mime="image/png"
            />
            <div className={styles.timelineInfo}>
              <div className={styles.timelineTitle}>
                <div className={styles.timelineTitleText}>Clock Limited</div>
                <div>2015-2017</div>
              </div>
              <div className={styles.timelineDescription}>
                Placement Software Engineer Junior Software Engineer Worked with
                Node.js and PHP to develop projects for clients such as
                ShortList Media, News UK, and Stonegate Pubs.
                <ul>
                  <li>
                    Helped migrate several Node.js projects from 0.10.x to 4.x.x
                  </li>
                  <li>Worked helping maintain several legacy PHP projects</li>
                  <li>TDD with Mocha and Chai</li>
                  <li>
                    Aided investigatiom investigation into replacing custom
                    framework with React to improve existing products
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.timelineContainer}>
            <Picture
              src={require("../assets/companies/lboro-uni.png")}
              alt="Clock Logo"
              className={styles.company}
              webp={require("../assets/companies/lboro-uni.png?webp")}
              mime="image/png"
            />
            <div className={styles.timelineInfo}>
              <div className={styles.timelineTitle}>
                <div className={styles.timelineTitleText}>Loughborough Uni</div>
                <div>2012-2017</div>
              </div>
              <div className={styles.timelineDescription}>
                Computer Science, MSci with Diploma in Professional Studies
                <ul>
                  <li>Won the Computer Science MSci Finalist Prize</li>
                  <li>
                    Came 2nd place in the Atos IT Challenge 2017 on Blockchain
                    technologies
                  </li>
                  <li>
                    Dissertation: Stock Market Prediction using Historical Data
                    and News Information
                  </li>
                  <li>
                    Thesis: Complex Adaptive Systems and Grouping Behaviour over
                    Evolution
                  </li>
                  <li>
                    Programme Representative in my 2nd and 3rd years of my
                    degree
                  </li>
                  <li>Team Leader role in multiple group projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
