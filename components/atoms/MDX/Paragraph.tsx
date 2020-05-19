import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const Paragraph: FC<Props> = ({ children }) => {
  return <p className={styles.p}>{children}</p>;
};

export default Paragraph;
