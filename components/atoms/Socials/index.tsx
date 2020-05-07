import {FC} from 'react';
import {FaGithubAlt, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import styles from './styles.module.css';

const Socials: FC = () => {
  return (
    <div className={styles.card}>
      <a href='https://github.com/maael' title="GitHub | maael">
        <div className={styles.item} style={{backgroundColor: 'var(--github-grey)', color: '#000000'}}>
          <FaGithubAlt />
        </div>
      </a>
      <a href='https://www.linkedin.com/in/melphick/' title="LinkedIn | melphick">
        <div className={styles.item} style={{backgroundColor: 'var(--linkedin-blue)'}}>
          <FaLinkedin />
        </div>
      </a>
      <a href='mailto:matthew.a.elphick@gmail.com' title="Email | matthew.a.elphick@gmail.com">
        <div className={styles.item} style={{backgroundColor: 'var(--email)'}}>
          <FaEnvelope />
        </div>
      </a>
    </div>
  )
}

export default Socials;