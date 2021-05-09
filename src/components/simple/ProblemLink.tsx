import { useRouter } from "next/router";

export default function ProblemLink() {
  const { asPath } = useRouter();
  return (
    <div className="pt-5 text-sm">
      Problem with this page? Submit a change{" "}
      <a
        href={`https://github.com/maael/mael/tree/master/content${asPath}.mdx`}
      >
        here
      </a>
      .
    </div>
  );
}
