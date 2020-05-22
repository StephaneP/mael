import { FC } from "react";
import styles from "./styles.module.css";

const TechLogo: FC<{ name: string }> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `url(/images/tech/logos/${name}.png)`,
        }}
        className={styles.img}
      />
    </div>
  );
};

export default TechLogo;
