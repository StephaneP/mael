import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import Post from "./layouts/Post";
import GibberishBookPage from "./layouts/bookpage/gibberish";
import Blockquote from "./MDX/Blockquote";
import CodeBlock from "./MDX/CodeBlock";

const components: MDXProviderComponents = {
  wrapper: ({ meta, children }) => {
    if (meta.layout === "post") {
      return <Post meta={meta}>{children}</Post>;
    }
    if (meta.layout === "bookpage") {
      if (meta.bookShort === "gibberish") {
        return <GibberishBookPage meta={meta}>{children}</GibberishBookPage>;
      }
    }
    // Fallback Layout
    return (
      <div style={{ padding: "20px", backgroundColor: "tomato" }}>
        <main>{children}</main>
      </div>
    );
  },
  code: CodeBlock,
  blockquote: Blockquote,
};
function CustomMDX(props) {
  return (
    <MDXProvider components={components}>
      <main {...props} />
    </MDXProvider>
  );
}

export default CustomMDX;
