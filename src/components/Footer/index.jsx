import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={['wrapper', styles.footerWrapper].join(' ')}>
        <p className={styles.text}>
          Memento Verborum &hearts; 2021
          <a
            className={styles.link}
            target="_blank"
            href="https://github.com/yegorkravchenko/memento-verborum"
          >
            <AiFillGithub />
          </a>
        </p>
        <p className={styles.text}>"Verba volant, scripta manent"</p>
      </div>
    </footer>
  );
}

export default Footer;
