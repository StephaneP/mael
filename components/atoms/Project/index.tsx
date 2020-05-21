import { FC, ReactNode } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Phone from "../Phone";
import Browser from "../Browser";
import MobileOnly from "../MobileOnly";
import DesktopOnly from "../DesktopOnly";
import styles from "./styles.module.css";

export interface Props {
  title: ReactNode;
  url: string;
  github: string;
  description: ReactNode;
}

const Project: FC<Props> = ({ github, title, url, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <p className={styles.title}>{title}</p>
        <a className={styles.ghIcon} href={github}>
          <FaGithub />
        </a>
        <a className={styles.linkIcon} href={url}>
          <FaLink />
        </a>
      </div>
      <DesktopOnly>
        <Browser src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Autocomplete_1.max-1000x1000.png" />
      </DesktopOnly>
      <MobileOnly>
        <Phone src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Autocomplete_1.max-1000x1000.png" />
      </MobileOnly>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Project;
