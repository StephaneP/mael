import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Anchor: FC<Props> = ({ children, href }) => {
  return (
    <a href={href} title={href} className={styles.a}>
      {children}
    </a>
  );
};

export default Anchor;
