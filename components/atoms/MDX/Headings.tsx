import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  id?: string;
  children: React.ReactNode;
}

export const H1: FC<Props> = (props) => {
  return (
    <a href={`#${props.id}`}>
      <h1 className={styles.h1}>{props.children}</h1>
    </a>
  );
};

export const H2: FC<Props> = (props) => {
  return (
    <a href={`#${props.id}`}>
      <h2 className={styles.h2}>{props.children}</h2>
    </a>
  );
};

export const H3: FC<Props> = (props) => {
  return (
    <a href={`#${props.id}`}>
      <h3 className={styles.h3}>{props.children}</h3>
    </a>
  );
};

export const H4: FC<Props> = (props) => {
  return (
    <a href={`#${props.id}`}>
      <h4 className={styles.h4}>{props.children}</h4>
    </a>
  );
};

export const H5: FC<Props> = (props) => {
  return (
    <a href={`#${props.id}`}>
      <h5 className={styles.h5}>{props.children}</h5>
    </a>
  );
};

export const H6: FC<Props> = (props) => {
  return (
    <a href={`#${props.id}`}>
      <h6 className={styles.h6}>{props.children}</h6>
    </a>
  );
};
