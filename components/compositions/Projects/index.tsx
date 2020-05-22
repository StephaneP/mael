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
    tech: ["js", "typescript", "react", "nextjs", "vercel", "mdx"],
    description: (
      <>Just my own personal site to write blog posts and showcase projects. Nothing fancy.</>
    ),
  },
  {
    title: <>Banks for Businesses in Coronavirus</>,
    url: "https://cvbanks.review/",
    github: "https://github.com/maael/coronavirus-banks",
    images: {
      web: "/images/sites/web/cvbanks.png",
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel"],
    description: (
      <>
        A quick site I made from a conversation with someone, about collecting business owners
        experiences with banks during the Coronavirus pandemic. It was inspired in part by{" "}
        <a href="https://www.lewiscotter.com/brands">this website</a> tracking how brands have
        treated their staff.
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
    tech: [
      "js",
      "typescript",
      "react",
      "socketio",
      "circleci",
      "heroku",
      // 'electron'
    ],
    description: (
      <>
        A website that allows people to join a room, and vote for a button to be pressed, that will
        be sent to an electron tray app running on a computer. Inspired by{" "}
        <a href="https://blog.twitch.tv/en/2016/01/13/announcing-the-twitch-plays-game-category-55149935ad79/">
          Twitch Plays
        </a>{" "}
        where stream viewers have control over the streamed content.
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
    tech: ["js", "typescript", "react", "nextjs", "vercel", "fauna", "aws"],
    description: (
      <>
        A website to track collections and share custom designs in{" "}
        <a href="https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/">
          Animal Crossing: New Horizons
        </a>
        .
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
    tech: ["js", "typescript", "react", "nextjs", "vercel", "fauna"],
    description: (
      <>
        A website to track caught creatures in <a href="https://crema.gg/games/temtem/">Temtem</a>{" "}
        as well as progress on quests, and to automatically track what Temtem you encounter.
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
    tech: ["js", "typescript", "react", "circleci", "nextjs", "vercel"],
    description: (
      <>
        A JSON API to return data about the game <a href="https://crema.gg/games/temtem/">Temtem</a>{" "}
        from the <a href="https://temtem.gamepedia.com/">Official Wiki</a>, that is updated every 4
        hours.
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
    tech: ["js", "typescript", "react", "mongodb", "circleci", "docker", "dokku", "digitalocean"],
    description: (
      <>
        A tool for crafting in <a href="https://eu.finalfantasyxiv.com/">Final Fantasy XIV</a>, that
        allows you to put in items that you have, and it will tell you what items you can craft from
        them.
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
    tech: ["js", "typescript", "react", "socketio", "circleci", "docker", "dokku", "digitalocean"],
    description: (
      <>
        A game where you and a group of friends join a room, and everyone besides one person get
        given a word. People then have to go around and give a hint about the word, without being
        too obvious, as even the person who doesn't know the word has to give a hint. Then, the
        players have to choose who doesn't know the word, while the person who didn't know the word
        gets to guess the word.
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
