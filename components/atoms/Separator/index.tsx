import { FC } from "react";
import styles from "./styles.module.css";

const Separator: FC<{ label: string }> = ({ label }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <div className={styles.label}>{label}</div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Separator;
