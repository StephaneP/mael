import { FC, ReactNode } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Phone from "../Phone";
import Browser from "../Browser";
import MobileOnly from "../MobileOnly";
import DesktopOnly from "../DesktopOnly";
import AdaptiveSplit, { AdaptiveSection } from "../AdaptiveSplit";
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
      <AdaptiveSplit>
        <AdaptiveSection>
          <DesktopOnly>
            <Browser src={images.web || ""} />
          </DesktopOnly>
          <MobileOnly>
            <div className={styles.phoneWrapper}>
              <Phone src={images.mobile || images.web || ""} />
            </div>
          </MobileOnly>
        </AdaptiveSection>
        <AdaptiveSection>
          <div className={styles.content}>
            <div className={styles.row}>
              <p className={styles.title}>{title}</p>
              <a className={styles.ghIcon} href={github}>
                <FaGithub />
              </a>
              <a className={styles.linkIcon} href={url}>
                <FaLink />
              </a>
            </div>
            <div className={styles.description}>{description}</div>
          </div>
        </AdaptiveSection>
      </AdaptiveSplit>
    </div>
  );
};

export default Project;
