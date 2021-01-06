import Image from "next/image";
import styles from "./styles.module.css";

export default function Browser({ src }: { src: any }) {
  return (
    <div className={styles.browser}>
      <div className={styles.browserBar}>
        <div className={styles.browserBtn} />
        <div className={styles.browserBtn} />
        <div className={styles.browserBtn} />
        <div className={styles.browserOmni} />
      </div>
      <div className={styles.browserContentImg}>
        <Image src={src} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
