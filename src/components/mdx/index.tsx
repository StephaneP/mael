import React, { HTMLProps } from "react";
import Image from "next/image";
import classnames from "classnames";
import { ComponentMap } from "mdx-bundler/client";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import styles from "./styles.module.css";

function MdxImage({ src }: HTMLProps<HTMLImageElement>) {
  return (
    <div className="flex justify-center">
      <Image src={src} height={120} width={200} />
    </div>
  );
}

const MdxParagraph: React.FC = (props) => {
  if (
    typeof props.children !== "string" &&
    (props.children as { type?: { name?: string } })?.type?.name === "MdxImage"
  ) {
    return <>{props.children}</>;
  }
  return <p {...props} />;
};

const MdxPre: React.FC<{
  showLineNumbers?: string;
  comment?: string;
  showCopy?: string;
  content: string;
  isCollapsible?: string;
  title?: string;
}> = ({
  children,
  title,
  isCollapsible,
  content,
  showLineNumbers,
  showCopy,
  ...props
}) => {
  const [copied, copy] = useCopyToClipboard(content);
  return (
    <div className="codeWrapper">
      {title ? <div className={styles.topCodeComment}>{title}</div> : null}
      <pre {...props}>{children}</pre>
      {showCopy !== undefined ? (
        <div className={styles.copyComment} onClick={copy}>
          {copied ? "✅ Copied" : "📋 Copy"}
        </div>
      ) : null}
      {props.comment ? (
        <div className={styles.bottomCodeComment}>{props.comment}</div>
      ) : null}
    </div>
  );
};

const MdxCode: React.FC<
  {
    showLineNumbers?: string;
    showCopy?: string;
    isCollapsible?: string;
    title?: string;
  } & HTMLProps<HTMLElement>
> = ({
  children,
  title,
  isCollapsible,
  showLineNumbers,
  showCopy,
  ...props
}) => {
  const lang = (props.className || "").replace("language-", "");
  const [collapsed, setCollapsed] = React.useState(isCollapsible !== undefined);
  return (
    <>
      <code
        {...props}
        className={classnames(
          {
            [styles.withLineNumbers]: showLineNumbers !== undefined,
            [styles.hidden]: collapsed,
            [styles.visible]: !collapsed,
          },
          styles.code,
          props.className
        )}
      >
        {children}
      </code>
      <span className={styles.badgeArea}>
        {isCollapsible !== undefined ? (
          <button
            className={styles.collapseBtn}
            onClick={() => setCollapsed((c) => !c)}
          >
            {collapsed ? "Show" : "Hide"}
          </button>
        ) : null}
        {lang ? <span className={styles.langBadge}>{lang}</span> : null}
      </span>
    </>
  );
};

const Preview: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-pink-200 flex justify-center items-center text-center sm:rounded-t-md p-5 pb-6 -mb-4 mx-1 dark:mx-0 border-solid border-gray-300 border-t-2 sm:border-l-2 sm:border-r-2 dark:border-pink-800">
      {children}
    </div>
  );
};

const mdxComponents: ComponentMap = {
  img: MdxImage,
  p: MdxParagraph,
  pre: MdxPre,
  code: MdxCode,
  Preview: Preview,
};

export default mdxComponents;
