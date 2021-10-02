import React from 'react';
import Header from '../../components/Header';
import Quote from '../../components/Quote';
import styles from './Home.module.scss';

function Home() {
  return (
    <>
      <div className={styles.coloredBackground}>
        <Header />
        <main>
          <Quote />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default Home;
