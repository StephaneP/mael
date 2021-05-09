import { GetStaticProps, GetStaticPaths } from "next";
import getContent from "../../functions/getContent";
import getContentItems from "../../functions/getContentItems";
import PageHeader from "../../components/complex/PageHeader";
import Post from "../../components/complex/PostContent";
import MetaTitle from "../../components/simple/MetaTitle";
import BookContents from "../../components/simple/BookContents";
import ProblemLink from "../../components/simple/ProblemLink";

export default function PostPage({
  code,
  frontmatter,
  contents,
}: {
  code: string;
  frontmatter: { title: string; description: string };
  contents: Record<string, unknown>;
}) {
  return (
    <div className="util-outer" style={{ height: "100vh" }}>
      <MetaTitle title={frontmatter.title} />
      <PageHeader />
      <div className="flex flex-col sm:flex-row-reverse w-full">
        <BookContents contents={contents} />
        <Post code={code} frontmatter={frontmatter} />
      </div>
      <ProblemLink />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookName = [].concat(params.slug).shift();
  const allBookItems = await getContentItems<{
    uri: string;
    name: string;
    frontmatter: Record<string, unknown>;
  }>("book", { recursive: true });
  const bookItems = allBookItems.filter((b) =>
    b.uri.startsWith(`/book/${bookName}`)
  );
  const contents = bookItems.reduce((acc, item) => {
    const chapter = item.uri
      .replace(`/book/${bookName}/`, "")
      .split("/")
      .shift();
    if (isNaN(parseInt(chapter, 10))) {
      return acc;
    }
    return {
      ...acc,
      [chapter]: {
        ...acc[chapter],
        link: `/book/${bookName}/${chapter}`,
        items: {
          ...acc[chapter]?.items,
          [item.name]: {
            ...item.frontmatter,
            link: `/book/${bookName}/${chapter}/${item.name}`,
          },
        },
      },
    };
  }, {});
  return {
    props: {
      ...(await getContent("book", [].concat(params.slug).join("/"))),
      contents,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await getContentItems("book", { recursive: true })).map(
      ({ uri }) => uri
    ),
    fallback: false,
  };
};
