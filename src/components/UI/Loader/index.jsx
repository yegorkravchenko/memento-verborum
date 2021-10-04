import React from 'react';
import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.bouncer}>
      {Array.from(Array(4).keys()).map((el) => (
        <div key={el} className={styles.ball}></div>
      ))}
    </div>
  );
}

export default Loader;
