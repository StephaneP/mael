import UseAnimations from "react-useanimations";
import githubAnimation from "react-useanimations/lib/github";
import Browser from "../Browser";
import styles from "./styles.module.css";
import type { Project } from "../../data/projects";

export default function ProjectCard({
  images,
  tech,
  title,
  description,
  github,
  url,
}: Project) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <a href={url} className={styles.imageLink}>
          <Browser src={images.web.defaultImage} webp={images.web.webp} />
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <a href={url} className={styles.titleText}>
            <div>{title}</div>
          </a>
          <a href={github}>
            <UseAnimations
              animation={githubAnimation}
              size={35}
              className={styles.github}
            />
          </a>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.techContainer}>
          {tech.map((t) => (
            <span key={t} className={styles.techTag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
