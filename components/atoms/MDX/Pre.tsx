import styles from "./pre.module.css";

export default function Pre({ children, ...args }) {
  console.info(children);
  if (children.props.mdxType === "code") {
    const lang = args.className.split("-").slice(1).join("-");
    return (
      <div className={styles.browser}>
        <div className={styles.browserBar}>
          <div className={styles.browserBtn} />
          <div className={styles.browserBtn} />
          <div className={styles.browserBtn} />
          <div className={styles.spacer} />
          {lang ? <div className={styles.lang}>{lang}</div> : null}
        </div>
        <div className={styles.browserContent}>
          <pre style={{ padding: 2 }} {...args}>
            {children}
          </pre>
        </div>
      </div>
    );
  } else {
    return <pre {...args}>{children}</pre>;
  }
}
