import { useRouter } from "next/router";
import { typeMapping } from "../../util/content";

export default function ProblemLink() {
  const { asPath } = useRouter();
  const parts = asPath.split("/").slice(1);
  const path = [typeMapping[parts[0]]].concat(parts.slice(1)).join("/");
  return (
    <div className="pt-5 text-sm">
      Problem with this page? Submit a change{" "}
      <a href={`https://github.com/maael/mael/tree/master/content/${path}.mdx`}>
        here
      </a>
      .
    </div>
  );
}
