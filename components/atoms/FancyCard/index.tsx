import styles from './styles.module.css';

export default function Card () {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage} />
      <div className={styles.content}>
        <div className={styles.title}>Matthew Elphick</div>
        Software Engineer
      </div>
    </div>
  )
}