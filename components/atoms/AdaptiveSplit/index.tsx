import { FC } from "react";
import styles from "./styles.module.css";

const AdaptiveSplit: FC = ({ children }) => {
  return <div className={styles.split}>{children}</div>;
};

const AdaptiveSection: FC = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

export { AdaptiveSection };
export default AdaptiveSplit;
