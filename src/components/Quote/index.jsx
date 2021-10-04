import React from 'react';
import Loader from '../UI/Loader';
import styles from './Quote.module.scss';

function Quote({ isLoading, data }) {
  return (
    <div className={styles.quote}>
      <div className="wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <blockquote className={styles.quoteContent}>
              {data.content}
            </blockquote>
            <p className={styles.author}>~ {data.author}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Quote;
