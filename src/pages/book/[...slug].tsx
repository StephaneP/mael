import { GetStaticProps, GetStaticPaths } from "next";
import getContent from "../../functions/getContent";
import getContentItems from "../../functions/getContentItems";
import PageHeader from "../../components/complex/PageHeader";
import Post from "../../components/complex/PostContent";
import MetaTitle from "../../components/simple/MetaTitle";
import ProblemLink from "../../components/simple/ProblemLink";

export default function PostPage({
  code,
  frontmatter,
}: {
  code: string;
  frontmatter: { title: string; description: string };
}) {
  return (
    <div className="util-outer" style={{ height: "100vh" }}>
      <MetaTitle title={frontmatter.title} />
      <PageHeader />
      <Post code={code} frontmatter={frontmatter} />
      <ProblemLink />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { ...(await getContent("book", [].concat(params.slug).join("/"))) },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getContentItems("book")).map(({ uri }) => uri);
  return {
    paths,
    fallback: false,
  };
};
