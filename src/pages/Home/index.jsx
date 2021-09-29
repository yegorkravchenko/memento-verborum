import React from 'react';
import Header from '../../components/Header';
import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <div className={styles.coloredBackground}>
        <Header />
      </div>
    </>
  );
}

export default Home;
