import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import getContentItems from "../functions/getContentItems";
import MainHeader from "../components/complex/MainHeader";
import Project from "../components/complex/ProjectItem";
import Snippet from "../components/complex/SnippetItem";
import ItemList from "../components/complex/ItemList";
import RoundedPicture from "../components/simple/RoundedPicture";

export default function Page({
  posts,
  projects,
  snippets,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  books: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snippets: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projects: any[];
}) {
  return (
    <div className="util-outer">
      <MainHeader />
      <div className="max-w-4xl w-full flex-1 items-start mt-5 gap-8 sm:gap-14 flex flex-col px-3">
        <section className="text-center text-xl md:text-2xl gap-8 flex flex-col items-center">
          <RoundedPicture src="/images/paw_programming.jpg" />
          <p>
            Hey, I’m Matt, a full-stack developer who enjoys working with people
            to make products to solve problems.
          </p>
          <p>
            I also make a lot of small projects to learn new things and make
            useful things.
          </p>
          <p>
            You can read more about me{" "}
            <Link href="/about">
              <a>here</a>
            </Link>
            , or see all the things I make and write down below.
          </p>
          <ArrowCircleDownIcon className="h-10 w-10" />
        </section>
        <ItemList title="Posts" items={posts} moreUrl="/posts" limit={4} />
        <ItemList
          title="Books"
          items={/*disable books for now*/ []}
          moreUrl="/books"
        />
        <ItemList
          title="Snippets"
          items={snippets}
          moreUrl="/snippets"
          Component={Snippet}
          limit={3}
        />
        <ItemList
          title="Projects"
          items={projects}
          Component={Project}
          limit={Infinity}
        />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: (await getContentItems("project", { includeCode: true }))
        .sort(
          (a, b) =>
            (a.frontmatter.index || Infinity) -
            (b.frontmatter.index || Infinity)
        )
        .reverse(),
      posts: await getContentItems("post"),
      books: await getContentItems("book"),
      snippets: await getContentItems("snippet"),
    },
  };
};
