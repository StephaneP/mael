import visit from "unist-util-visit";
import toHtml from "hast-util-to-html";
import unified from "unified";
import parse from "rehype-parse";

const reg = /(<p.*>)\[(.+)\]/;

function handleBlockquote(code) {
  const html = toHtml(code);
  let propertiesStr = "";
  const result = html
    .replace(reg, (_, p, s) => {
      propertiesStr = s;
      return "";
    })
    .replace("<blockquote>", "")
    .replace("</blockquote>", "")
    .replace(/<\/p>\s*$/, "");
  const properties: { [k: string]: string } = {};
  propertiesStr.split("|").forEach((i) => {
    if (i === "center") {
      properties["data-align"] = "center";
    } else if (i.startsWith("icon")) {
      properties["data-icon"] = i.replace("icon:", "");
    } else {
      properties["data-icon"] = i;
    }
  });
  const hast = unified()
    .use(parse, { emitParseErrors: true, fragment: true })
    .parse(result);
  return {
    children: hast.children,
    properties,
  };
}

export default (_options = {}) => {
  return (tree) => {
    visit(tree, "element", visitor);
  };

  function visitor(node, _index, _parentNode) {
    if (node.tagName === "blockquote") {
      const { children, properties } = handleBlockquote(node);
      node.children = children;
      node.properties = properties;
    }
  }
};
