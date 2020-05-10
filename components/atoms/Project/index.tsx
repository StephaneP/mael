import { FC, ReactNode } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import styles from "./styles.module.css";

export interface Props {
  title: ReactNode;
  url: string;
  github: string;
  description: ReactNode;
}

const Project: FC<Props> = ({ github, title, url, description }) => {
  return (
    <div>
      <div className={styles.row}>
        <a className={styles.ghIcon} href={github}>
          <FaGithub />
        </a>
        <p className={styles.title}>{title}</p>
        <a className={styles.linkIcon} href={url}>
          <FaLink />
        </a>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Project;
