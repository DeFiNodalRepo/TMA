import { useState, useEffect } from 'react';
import { getConfData } from '../apiCalls';

export const useFetchConf = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const confData = async () => {
      try {
        setIsLoading(true);
        const result = await getConfData();
        setData(result);
      } catch (error) {
        setError(error.toString());
      } finally {
        setIsLoading(false);
      };
    }, []});

  return { data, isLoading, error };
};