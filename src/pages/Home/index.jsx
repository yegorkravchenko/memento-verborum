import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Header from '../../components/Header';
import Quote from '../../components/Quote';
import styles from './Home.module.scss';
import QuoteService from '../../api/QuoteService';

function Home() {
  const [quoteData, setQuoteData] = useState({});
  const [fetchQuote, quoteIsLoading, quoteError] = useFetch(async () => {
    const response = await QuoteService.getRandom();
    setQuoteData(response.data);
  });

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className={styles.coloredBackground}>
        <Header />
        <main>
          <Quote data={quoteData} />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default Home;
