import { FC } from "react";
import Project, { Props as ProjectProps } from "../../atoms/Project";
import Separator from "../../atoms/Separator";
import TechLogo from "../../atoms/TechLogo";
import styles from "./styles.module.css";

const projects: ProjectProps[] = [
  {
    title: <>Personal Site</>,
    url: "https://mael.maael.now.sh",
    github: "https://github.com/maael/mael",
    images: {
      web: "/images/sites/web/mael.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="nextjs" />
          <TechLogo name="vercel" />
          <TechLogo name="mdx" />
        </div>
      </>
    ),
  },
  {
    title: <>Banks for Businesses in Coronavirus</>,
    url: "https://cvbanks.review/",
    github: "https://github.com/maael/coronavirus-banks",
    images: {
      web: "/images/sites/web/cvbanks.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="nextjs" />
          <TechLogo name="vercel" />
        </div>
      </>
    ),
  },
  {
    title: <>Majority Plays</>,
    url: "https://majority-plays.herokuapp.com/",
    github: "https://github.com/maael/majority-plays",
    images: {
      web: "/images/sites/web/majority-plays.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="socketio" />
          <TechLogo name="circleci" />
          <TechLogo name="heroku" />
        </div>
      </>
    ),
  },
  {
    title: <>Nook Services</>,
    url: "https://nook.services",
    github: "https://github.com/maael/nook",
    images: {
      web: "/images/sites/web/nook.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="nextjs" />
          <TechLogo name="vercel" />
          <TechLogo name="fauna" />
        </div>
      </>
    ),
  },
  {
    title: <>Tem Tools</>,
    url: "https://tem.tools",
    github: "https://github.com/maael/temtem",
    images: {
      web: "/images/sites/web/temtem.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="nextjs" />
          <TechLogo name="vercel" />
          <TechLogo name="fauna" />
        </div>
      </>
    ),
  },
  {
    title: <>Temtem API</>,
    url: "https://temtem-api.mael.tech",
    github: "https://github.com/maael/temtem-api",
    images: {
      web: "/images/sites/web/temtem-api.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="circleci" />
          <TechLogo name="nextjs" />
          <TechLogo name="vercel" />
        </div>
      </>
    ),
  },
  {
    title: <>Pocketcraft</>,
    url: "https://pocketcraft.trade",
    github: "https://github.com/maael/ffxivpocketcraft",
    images: {
      web: "/images/sites/web/pocketcraft.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="mongodb" />
          <TechLogo name="circleci" />
          <TechLogo name="docker" />
          <TechLogo name="dokku" />
          <TechLogo name="digitalocean" />
        </div>
      </>
    ),
  },
  {
    title: <>Copycat</>,
    url: "https://copycat.mael.xyz",
    github: "https://github.com/maael/copycat",
    images: {
      web: "/images/sites/web/copycat.png",
    },
    description: (
      <>
        <Separator label="Tech" />
        <div className={styles.techContainer}>
          <TechLogo name="js" />
          <TechLogo name="typescript" />
          <TechLogo name="react" />
          <TechLogo name="socketio" />
          <TechLogo name="circleci" />
          <TechLogo name="docker" />
          <TechLogo name="dokku" />
          <TechLogo name="digitalocean" />
        </div>
      </>
    ),
  },
];

const Projects: FC = () => {
  return (
    <div>
      {projects.map((p) => (
        <Project key={p.url || p.github} {...p} />
      ))}
    </div>
  );
};

export default Projects;
