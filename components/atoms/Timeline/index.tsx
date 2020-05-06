import styles from "./styles.module.css";

interface Item {
  title: string;
  description: string;
}

interface Props {
  items: Item[]
}

export default function Timeline({items}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftLine} />
      <ul className={styles.itemsContainer}>
        {items.map(({title, description}) => (
          <li key={title} className={styles.item}>
            <div className={styles.circleAndTitle}>
              <div className={styles.circle} />
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.description}>{description}</div>
          </li>
      ))}
      </ul>
    </div>
  );
}
