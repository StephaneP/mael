import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import classnames from "classnames";
import { getMDXComponent } from "mdx-bundler/client";
import mdxComponents from "../mdx";

export default function Project({
  item: { code, frontmatter },
  index,
}: {
  item: {
    code: string;
    frontmatter: {
      website: string;
      title: string;
      github: string;
      image: string;
      tags: string;
    };
  };
  index: number;
}) {
  const Component = React.useMemo(() => getMDXComponent(code) || null, [code]);
  return (
    <div
      className={classnames(
        "p-5 w-full flex flex-col-reverse sm:flex-row gap-5 sm:gap-12",
        { "flex-col-reverse sm:flex-row-reverse": index % 2 === 1 }
      )}
    >
      <div className="flex flex-1 flex-col gap-3 sm:pt-2">
        <div className="flex flex-row gap-2">
          {frontmatter.website ? (
            <Link href={frontmatter.website}>
              <a className="flex-1 text-2xl">{frontmatter.title}</a>
            </Link>
          ) : (
            <p className="flex-1 text-2xl">{frontmatter.title}</p>
          )}
          <Link href={frontmatter.github}>
            <a className="util-invert transform hover:scale-125 transition-transform">
              <UseAnimations animation={github} size={35} />
            </a>
          </Link>
          {frontmatter.website ? (
            <Link href={frontmatter.website}>
              <a className="transform hover:scale-125 transition-transform">
                <ExternalLinkIcon className="h-8 w-8 inline-block" />
              </a>
            </Link>
          ) : null}
        </div>
        <div className="text-center flex-1">
          <Component components={mdxComponents} />
        </div>
        <div className="flex flex-row flex-wrap gap-2 justify-center items-center uppercase">
          {frontmatter.tags
            .split(",")
            .map((t) => t.trim())
            .map((t, i) => [
              i === 0 ? null : (
                <span key={`${t}-divider`} className="text-pink-600 text-xl">
                  |
                </span>
              ),
              <span key={t}>{t}</span>,
            ])}
        </div>
      </div>
      <div className="flex-1 grid content-center">
        <div className="aspect-w-9 aspect-h-6">
          <div className="rounded-xl overflow-hidden shadow-xl border-solid border-2 border-gray-700">
            <div className="bg-gray-700 h-7 flex flex-row items-center gap-2 relative border-solid border-b-2 border-gray-700">
              <div className="bg-red-500 rounded-full h-3 w-3 ml-4"></div>
              <div className="bg-yellow-400 rounded-full h-3 w-3"></div>
              <div className="bg-green-500 rounded-full h-3 w-3"></div>
              <div className="flex-1"></div>
              <div className="bg-gray-800 rounded-lg h-4/6 w-4/6 mr-11 relative"></div>
            </div>
            <div
              className={classnames(
                "grid content-center w-full h-full text-center relative text-5xl",
                { "-top-4": !frontmatter.image }
              )}
            >
              {frontmatter.image ? (
                <Image
                  src={frontmatter.image}
                  objectFit="cover"
                  layout="fill"
                />
              ) : (
                "✨"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
