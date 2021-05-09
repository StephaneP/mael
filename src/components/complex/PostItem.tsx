import Link from "next/link";

export default function PostItem({
  item: p,
}: {
  item: { frontmatter: { description; title }; uri: string };
  index: number;
}) {
  return (
    <div className="filter drop-shadow-md bg-gray-700 rounded-md p-5 w-full flex flex-col gap-2 transform transition-transform hover:scale-105">
      <div>
        <Link href={p.uri}>
          <a className="font-bold text-2xl">{p.frontmatter.title}</a>
        </Link>
      </div>
      <div className="text-gray-200">{p.frontmatter.description}</div>
      <div>
        <Link href={p.uri}>
          <a className="text-gray-50 opacity-50 hover:opacity-100">
            Read more →
          </a>
        </Link>
      </div>
    </div>
  );
}
