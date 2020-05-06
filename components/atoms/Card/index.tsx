import {FC} from 'react';
import styles from './styles.module.css';

const Card: FC = ({children}) => {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
}

export default Card;