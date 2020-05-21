import { FC } from "react";
import styles from "./styles.module.css";

const MobileOnly: FC = ({ children }) => {
  return <div className={styles.controller}>{children}</div>;
};

export default MobileOnly;
