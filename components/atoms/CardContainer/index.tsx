import {FC} from 'react';
import styles from './styles.module.css';

const CardContainer: FC = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default CardContainer;