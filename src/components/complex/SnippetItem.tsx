import Link from "next/link";
import classNames from "classnames";

const languageClasses = {
  default: "bg-gray-400 text-white",
  TS: "bg-blue-500 text-white",
};

export default function SnippetItem({
  item: p,
}: {
  item: {
    uri: string;
    frontmatter: { language: string; title: string; description: string };
  };
  index: number;
}) {
  return (
    <Link href={p.uri}>
      <a className="filter drop-shadow-md bg-gray-700 rounded-md px-5 py-2 w-full flex flex-row gap-3 items-center transform transition-transform hover:scale-105 hover:no-underline">
        {p.frontmatter.language ? (
          <div
            className={classNames(
              "rounded-md px-2",
              languageClasses[p.frontmatter.language] || languageClasses.default
            )}
          >
            {p.frontmatter.language}
          </div>
        ) : null}
        <div className="flex-1 sm:flex-none">
          <p className="font-bold text-xl">{p.frontmatter.title}</p>
        </div>
        <div className="text-gray-200 flex-1 hidden sm:flex">
          {p.frontmatter.description}
        </div>
        <div>
          <p className="text-gray-50 opacity-50 hover:opacity-100">→</p>
        </div>
      </a>
    </Link>
  );
}
