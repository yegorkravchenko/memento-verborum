import { useState } from 'react';

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3500);
    }
  };

  return [fetching, isLoading, error];
};
