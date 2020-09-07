import { useContext } from "react";
import UseAnimations from "react-useanimations";
import copy from "react-useanimations/lib/copy";
import useClipboard from "react-use-clipboard";
import Highlight, { Prism } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/github";
import darkTheme from "./panda-theme";
import { ThemeContext } from "../Theme";

export default function CodeBlock(props) {
  const { colorMode } = useContext(ThemeContext);
  const { children, className: originalClassname, metastring } = props;
  const [_, setCopied] = useClipboard(children as string);
  const language = (originalClassname || "").replace(/language-/, "");
  const theme = colorMode === "light" ? lightTheme : darkTheme;
  return (
    <div style={{ position: "relative" }}>
      <Highlight
        Prism={Prism}
        code={children}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{ ...style, padding: "20px 20px 5px 20px" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      {metastring ? (
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          {metastring}
        </div>
      ) : null}
      <button
        type="button"
        style={{
          filter: "invert(1)",
          cursor: "pointer",
          position: "absolute",
          top: 10,
          right: 10,
          userSelect: "none",
          appearance: "none",
          border: "none",
          background: "transparent",
        }}
        onClick={setCopied}
      >
        <UseAnimations animation={copy} />
      </button>
    </div>
  );
}
