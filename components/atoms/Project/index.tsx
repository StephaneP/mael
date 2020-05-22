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
  images: {
    web?: string;
    mobile?: string;
  };
}

const Project: FC<Props> = ({ github, title, url, description, images }) => {
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
        <Browser src={images.web || ""} />
      </DesktopOnly>
      <MobileOnly>
        <Phone src={images.mobile || images.web || ""} />
      </MobileOnly>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Project;
