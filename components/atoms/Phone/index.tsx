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
          <picture className={styles.phoneBrowserContentPicture}>
            <source
              srcSet={`${src}.webp`}
              className={styles.phoneBrowserContentImage}
              type="image/webp"
            />
            <img
              src={`${src}.png`}
              alt="Phone screen"
              loading="lazy"
              className={styles.phoneBrowserContentImage}
            />
          </picture>
          <div className={styles.phoneBrowserBottomBar}></div>
        </div>
      </div>
    </div>
  );
}
