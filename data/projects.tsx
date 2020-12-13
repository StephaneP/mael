import { ReactNode } from "react";

export interface Project {
  title: string;
  url: string;
  github: string;
  description: ReactNode;
  tech: string[];
  images: {
    web?: {
      defaultImage: any;
      defaultImageMime: string;
      webp: any;
    };
    mobile?: string;
  };
}

const projects: Project[] = [
  {
    title: "Tilted",
    url: "https://tilted.mael.tech",
    github: "https://github.com/maael/tilted",
    images: {
      web: {
        defaultImage: require("../assets/projects/tilted.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/tilted.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel"],
    description: (
      <>
        Pretty much Heads Up! with lists of video games, movies, and TV shows.
        Uses web APIs like vibration and gyro.
      </>
    ),
  },
  {
    title: "Bopsy",
    url: "https://bopsy.mael.tech",
    github: "https://github.com/maael/bopsy",
    images: {
      web: {
        defaultImage: require("../assets/projects/bopsy.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/bopsy.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel"],
    description: (
      <>
        A game to see if you can recognise the theme music of video games,
        movies, or TV shows - or at least what a youtube search for the theme
        comes up with.
      </>
    ),
  },
  {
    title: "Video Hydra",
    url: "https://vidhydra.mael.tech",
    github: "https://github.com/maael/hydratwitch",
    images: {
      web: {
        defaultImage: require("../assets/projects/hydratwitch.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/hydratwitch.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel"],
    description: (
      <>
        A place to watch as many twitch streams, twitch chats, or youtube videos
        as you want, however you want. Add items as tiles, and resize them, drag
        and drop them, however you want. It saves what you&apos;re watching and
        the layouts to your browser, and creates a sharable URL. An idea
        suggested by a friend, that I implemented in ~2 days.
      </>
    ),
  },
  {
    title: "Personal Site",
    url: "https://mael.tech",
    github: "https://github.com/maael/mael",
    images: {
      web: {
        defaultImage: require("../assets/projects/mael.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/mael.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel", "mdx"],
    description: (
      <>
        The latest iteration of my own personal site to write blog posts and
        showcase projects, using MDX and Next.js.
      </>
    ),
  },
  {
    title: "Dedupe-o-Tron",
    url: "https://dedupe.mael.tech",
    github: "https://github.com/maael/dedupotron",
    images: {
      web: {
        defaultImage: require("../assets/projects/dedupotron.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/dedupotron.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel"],
    description: (
      <>
        A tool for Guild Wars 2 that lets you find duplicates across your
        inventories and bank tabs (and guild stashes if you want) that you could
        stack.
      </>
    ),
  },
  {
    title: "Invocation Game",
    url: "https://invocation.mael.tech/",
    github: "https://github.com/maael/invocation-game",
    images: {
      web: {
        defaultImage: require("../assets/projects/invocation.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/invocation.png?webp"),
      },
    },
    tech: ["js", "typescript", "phaser", "nextjs", "vercel"],
    description: (
      <>
        A game about pushing buttons and comboing different skills, created with{" "}
        <a href="http://phaser.io/">Phaser</a>.
      </>
    ),
  },
  {
    title: "Banks for Businesses in Coronavirus",
    url: "https://cvbanks.review/",
    github: "https://github.com/maael/coronavirus-banks",
    images: {
      web: {
        defaultImage: require("../assets/projects/coronavirus-banks.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/coronavirus-banks.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel"],
    description: (
      <>
        A quick site I made from a conversation with someone, about collecting
        business owners experiences with banks during the Coronavirus pandemic.
        It was inspired in part by{" "}
        <a href="https://www.lewiscotter.com/brands">this website</a> tracking
        how brands have treated their staff.
      </>
    ),
  },
  {
    title: "Majority Plays",
    url: "https://majority-plays.herokuapp.com/",
    github: "https://github.com/maael/majority-plays",
    images: {
      web: {
        defaultImage: require("../assets/projects/majority-plays.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/majority-plays.png?webp"),
      },
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
        A website that allows people to join a room, and vote for a button to be
        pressed, that will be sent to an electron tray app running on a
        computer. Inspired by{" "}
        <a href="https://blog.twitch.tv/en/2016/01/13/announcing-the-twitch-plays-game-category-55149935ad79/">
          Twitch Plays
        </a>{" "}
        where stream viewers have control over the streamed content.
      </>
    ),
  },
  {
    title: "Nook Services",
    url: "https://nook.services",
    github: "https://github.com/maael/nook",
    images: {
      web: {
        defaultImage: require("../assets/projects/nook.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/nook.png?webp"),
      },
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
    title: "Tem Tools",
    url: "https://tem.tools",
    github: "https://github.com/maael/temtem",
    images: {
      web: {
        defaultImage: require("../assets/projects/temtem.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/temtem.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "nextjs", "vercel", "fauna"],
    description: (
      <>
        A website to track caught creatures in{" "}
        <a href="https://crema.gg/games/temtem/">Temtem</a> as well as progress
        on quests, and to automatically track what Temtem you encounter.
      </>
    ),
  },
  {
    title: "Temtem API",
    url: "https://temtem-api.mael.tech",
    github: "https://github.com/maael/temtem-api",
    images: {
      web: {
        defaultImage: require("../assets/projects/temtem-api.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/temtem-api.png?webp"),
      },
    },
    tech: ["js", "typescript", "react", "circleci", "nextjs", "vercel"],
    description: (
      <>
        A JSON API to return data about the game{" "}
        <a href="https://crema.gg/games/temtem/">Temtem</a> from the{" "}
        <a href="https://temtem.gamepedia.com/">Official Wiki</a>, that is
        updated every 4 hours.
      </>
    ),
  },
  {
    title: "Pocketcraft",
    url: "https://pocketcraft.trade",
    github: "https://github.com/maael/ffxivpocketcraft",
    images: {
      web: {
        defaultImage: require("../assets/projects/pocketcraft.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/pocketcraft.png?webp"),
      },
    },
    tech: [
      "js",
      "typescript",
      "react",
      "mongodb",
      "circleci",
      "docker",
      "dokku",
      "digitalocean",
    ],
    description: (
      <>
        A tool for crafting in{" "}
        <a href="https://eu.finalfantasyxiv.com/">Final Fantasy XIV</a>, that
        allows you to put in items that you have, and it will tell you what
        items you can craft from them.
      </>
    ),
  },
  {
    title: "Copycat",
    url: "https://copycat.mael.xyz",
    github: "https://github.com/maael/copycat",
    images: {
      web: {
        defaultImage: require("../assets/projects/copycat.png"),
        defaultImageMime: "image/png",
        webp: require("../assets/projects/copycat.png?webp"),
      },
    },
    tech: [
      "js",
      "typescript",
      "react",
      "socketio",
      "circleci",
      "docker",
      "dokku",
      "digitalocean",
    ],
    description: (
      <>
        A game where you and a group of friends join a room, and everyone
        besides one person get given a word. People then have to go around and
        give a hint about the word, without being too obvious, as even the
        person who doesn&apos;t know the word has to give a hint. Then, the
        players have to choose who doesn&apos;t know the word, while the person
        who didn&apos;t know the word gets to guess the word.
      </>
    ),
  },
];

export default projects;
