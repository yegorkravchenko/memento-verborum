import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Loader from '../UI/Loader';
import styles from './Quote.module.scss';

function Quote({ isLoading, data }) {
  return (
    <div className={styles.quote}>
      <CSSTransition in={!isLoading} classNames="quote" timeout={500}>
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
      </CSSTransition>
    </div>
  );
}

export default Quote;
