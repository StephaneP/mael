import {FC} from 'react';
import styles from './styles.module.css';

const PageWrapper: FC = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default PageWrapper;