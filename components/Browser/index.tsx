import styles from "./styles.module.css";

export default function Browser({ src, webp }: { src: any; webp: any }) {
  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <div className={styles.browserBtn} />
        <div className={styles.browserBtn} />
        <div className={styles.browserBtn} />
        <div className={styles.browserOmni} />
      </div>

      <picture className={styles.browserContentPicture}>
        <source
          srcSet={webp}
          className={styles.browserContentImage}
          type="image/webp"
        />
        <img
          src={src}
          alt="Browser"
          loading="lazy"
          className={styles.browserContentImage}
        />
      </picture>
    </div>
  );
}
