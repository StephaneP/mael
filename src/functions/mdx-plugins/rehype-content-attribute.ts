import visit from "unist-util-visit";
import nodeToString from "hast-util-to-string";

export default (_options = {}) => {
  return (tree) => {
    visit(tree, "element", visitor);
  };

  function visitor(node, index, parentNode) {
    if (node.tagName === "code") {
      parentNode.properties.content = nodeToString(node);
    }
  }
};
