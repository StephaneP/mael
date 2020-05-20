import { FC, Children, cloneElement, ReactNode } from "react";
import styles from "./styles.module.css";

function processChildren(children: ReactNode) {
  return Children.map(children, (node: any) => {
    if (typeof node === "string") {
      if (node.match(/^\[.+\]$/)) {
        return "";
      }
      return node;
    }
    if (typeof node.props.children === "string") return cloneElement(node, [], node.props.children);
    return cloneElement(node, [], processChildren(node.props.children));
  });
}

const Blockquote: FC = ({ children }) => {
  let info = {
    icon: undefined,
    center: undefined,
  };
  try {
    const content =
      typeof children === "string"
        ? [children]
        : Array.isArray(children)
        ? (children[0] as any).props.children
        : (children as any).props.children;
    const details = content.find((c) => c.match(/^\[.+\]$/));
    if (details) {
      info = details
        .substring(1, details.length - 1)
        .split("|")
        .reduce((acc, i) => {
          const p = i.split(":");
          return { ...acc, [p[0]]: p.length === 1 ? true : p.slice(1).join(":") };
        }, {});
    }
  } catch {
    //
  }
  return (
    <blockquote
      className={styles.blockquote}
      style={{ textAlign: info.center ? "center" : undefined }}
    >
      {info.icon ? (
        <div className={styles.blockquoteIcon}>
          <div className={styles.blockquoteIconInner}>{info.icon}</div>
        </div>
      ) : (
        ""
      )}
      {processChildren(children)}
    </blockquote>
  );
};

export default Blockquote;
