import React from 'react';
import styles from './Quote.module.scss';

function Quote({ data }) {
  return (
    <div className={styles.quote}>
      <div className="wrapper">
        <blockquote className={styles.quoteContent}>{data.content}</blockquote>
        <p className={styles.author}>~ {data.author}</p>
      </div>
    </div>
  );
}

export default Quote;
