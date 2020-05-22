import { FC } from "react";
import styles from "./styles.module.css";

const Center: FC = ({ children }) => {
  return <div className={styles.center}>{children}</div>;
};

export default Center;
