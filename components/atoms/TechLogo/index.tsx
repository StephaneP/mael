import { FC } from "react";
import styles from "./styles.module.css";

const TechLogo: FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.container}>
      <picture>
        <source
          srcSet={`/images/tech/logos/${name}.webp`}
          className={styles.img}
          type="image/webp"
        />
        <img
          src={`/images/tech/logos/${name}.png`}
          alt={name}
          className={styles.img}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default TechLogo;
