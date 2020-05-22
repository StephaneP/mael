import styles from "./styles.module.css";

export default function Browser({ src }: { src: string }) {
  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <div className={styles.browserBtn}></div>
        <div className={styles.browserBtn}></div>
        <div className={styles.browserBtn}></div>
        <div className={styles.browserOmni}></div>
      </div>
      <div className={styles.browserContent} style={{ backgroundImage: `url(${src}.png)` }}></div>
    </div>
  );
}
