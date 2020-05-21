import styles from "./styles.module.css";

export default function Phone({ src }: { src: string }) {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneScreen}>
        <div className={styles.phoneBrowser}>
          <div className={styles.phoneBrowserBar}>
            <div className={styles.phoneBrowserLeftBtn}></div>
            <div className={styles.phoneBrowserOmni}></div>
            <div className={styles.phoneBrowserRightBtn}></div>
            <div className={styles.phoneBrowserRightBtn}></div>
          </div>
          <div
            className={styles.phoneBrowserContent}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
          <div className={styles.phoneBrowserBottomBar}></div>
        </div>
      </div>
    </div>
  );
}
