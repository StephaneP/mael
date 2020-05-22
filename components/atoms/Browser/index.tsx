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

      <picture className={styles.browserContentPicture}>
        <source srcSet={`${src}.webp`} className={styles.browserContentImage} type="image/webp" />
        <img
          src={`${src}.png`}
          alt="Phone screen"
          loading="lazy"
          className={styles.browserContentImage}
        />
      </picture>
    </div>
  );
}
