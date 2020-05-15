import { FC, CSSProperties } from "react";
import styles from "./styles.module.css";

const PageWrapper: FC<{ style?: CSSProperties }> = ({ children, style }) => {
  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  );
};

export default PageWrapper;
