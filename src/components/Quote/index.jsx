import React from 'react';
import styles from './Quote.module.scss';

function Quote() {
  return (
    <div className={styles.quote}>
      <div className="wrapper">
        <blockquote className={styles.quoteContent}>
          Always do sober what you said you’d do drunk. That will teach you to
          keep your mouth shut.
        </blockquote>
        <p className={styles.author}>~ Ernest Hemingway</p>
      </div>
    </div>
  );
}

export default Quote;
