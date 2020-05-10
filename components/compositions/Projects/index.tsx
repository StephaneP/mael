import { FC } from "react";
import Project, { Props as ProjectProps } from "../../atoms/Project";
import TechLogo from "../../atoms/TechLogo";

const projects: ProjectProps[] = [
  {
    title: <>Personal Site</>,
    url: "https://mael.maael.now.sh",
    github: "https://github.com/maael/mael",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="nextjs" />
        <TechLogo name="vercel" />
        <TechLogo name="mdx" />
      </>
    ),
  },
  {
    title: <>Banks for Businesses in Coronavirus</>,
    url: "https://cvbanks.review/",
    github: "https://github.com/maael/coronavirus-banks",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="nextjs" />
        <TechLogo name="vercel" />
      </>
    ),
  },
  {
    title: <>Majority Plays</>,
    url: "https://majority-plays.herokuapp.com/",
    github: "https://github.com/maael/majority-plays",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="socketio" />
        <TechLogo name="circleci" />
        <TechLogo name="heroku" />
      </>
    ),
  },
  {
    title: <>Nook Services</>,
    url: "https://nook.services",
    github: "https://github.com/maael/nook",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="nextjs" />
        <TechLogo name="vercel" />
        <TechLogo name="fauna" />
      </>
    ),
  },
  {
    title: <>Tem Tools</>,
    url: "https://tem.tools",
    github: "https://github.com/maael/temtem",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="nextjs" />
        <TechLogo name="vercel" />
        <TechLogo name="fauna" />
      </>
    ),
  },
  {
    title: <>Temtem API</>,
    url: "https://temtem-api.mael.tech",
    github: "https://github.com/maael/temtem-api",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="circleci" />
        <TechLogo name="nextjs" />
        <TechLogo name="vercel" />
      </>
    ),
  },
  {
    title: <>Pocketcraft</>,
    url: "https://pocketcraft.trade",
    github: "https://github.com/maael/ffxivpocketcraft",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="mongodb" />
        <TechLogo name="circleci" />
        <TechLogo name="docker" />
        <TechLogo name="dokku" />
        <TechLogo name="digitalocean" />
      </>
    ),
  },
  {
    title: <>Copycat</>,
    url: "https://copycat.mael.xyz",
    github: "https://github.com/maael/copycat",
    description: (
      <>
        <TechLogo name="js" />
        <TechLogo name="typescript" />
        <TechLogo name="react" />
        <TechLogo name="socketio" />
        <TechLogo name="circleci" />
        <TechLogo name="docker" />
        <TechLogo name="dokku" />
        <TechLogo name="digitalocean" />
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
