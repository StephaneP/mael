import { GetStaticProps, GetStaticPaths } from "next";
import getContentItems from "../functions/getContentItems";
import PageHeader from "../components/complex/PageHeader";
import ItemList from "../components/complex/ItemList";
import SnippetItem from "../components/complex/SnippetItem";
import MetaTitle from "../components/simple/MetaTitle";

export default function ContentListPage({
  items,
  type,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  type: string;
}) {
  return (
    <div className="util-outer">
      <MetaTitle title={type} />
      <PageHeader />
      <div className="max-w-4xl w-full flex-1 items-start mt-5 gap-5 sm:gap-10 flex flex-col px-3">
        <div className="text-black dark:text-white text-xl text-center w-full">
          {descriptions[type]}
        </div>
        <div className="text-yellow-300 text-xl text-center w-full">
          {items.length} {type}
        </div>
        <ItemList
          limit={Infinity}
          items={items}
          Component={componentMap[type]}
        />
      </div>
    </div>
  );
}

const mapping = {
  books: "book",
  snippets: "snippet",
  posts: "post",
};

const descriptions = {
  books:
    "Here are some longer more complete collections of writings that I've done.",
  snippets:
    "These are just some useful pieces of code, or gotchas, that I find are handy to have written down.",
  posts: "These are some longer writings on a specific topic.",
};

const componentMap = {
  snippets: SnippetItem,
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const type = params.contentType.toString();
  const contentType = mapping[type];
  const description = descriptions[type];
  return {
    props: { items: await getContentItems(contentType), type, description },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: ["/posts", "/books", "/snippets"], fallback: false };
};
