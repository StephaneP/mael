import {FC} from 'react';
import {FaGithubAlt, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import styles from './styles.module.css';

const Socials: FC = ({children}) => {
  return (
    <div className={styles.card}>
      <a href='https://github.com/maael'>
        <div className={styles.item} style={{backgroundColor: 'var(--github-grey)', color: '#000000'}}>
          <FaGithubAlt />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/melphick/'>
        <div className={styles.item} style={{backgroundColor: 'var(--linkedin-blue)'}}>
          <FaLinkedin />
        </div>
      </a>
      <a href='mailto:matthew.a.elphick@gmail.com'>
        <div className={styles.item} style={{backgroundColor: 'var(--email)'}}>
          <FaEnvelope />
        </div>
      </a>
    </div>
  )
}

export default Socials;