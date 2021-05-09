import toHtml from "hast-util-to-html";
import unified from "unified";
import parse from "rehype-parse";

const CALLOUT = /__(.*?)__/g;

export default (code) => {
  const html = toHtml(code);
  const result = html.replace(
    CALLOUT,
    (_, text) => `<span class="highlight-word">${text}</span>`
  );
  const hast = unified()
    .use(parse, { emitParseErrors: true, fragment: true })
    .parse(result);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return hast.children as any;
};
