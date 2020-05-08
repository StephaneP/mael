import {ReactNode} from 'react';
import styles from "./styles.module.css";

interface Item {
  key: string;
  title: ReactNode;
  description: ReactNode;
  icon?: string;
}

interface Props {
  items: Item[]
}

export default function Timeline({items}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftLine} />
      <ul className={styles.itemsContainer}>
        {items.map(({key, title, description, icon}) => (
          <li key={key} className={styles.item}>
            <div className={styles.circleAndTitle}>
              <div className={styles.circle} style={{backgroundImage: icon ? `url(${icon})` : icon}} />
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.description}>{description}</div>
          </li>
      ))}
      </ul>
    </div>
  );
}
