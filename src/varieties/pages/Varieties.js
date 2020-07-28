import React, { useEffect, useState } from 'react';
import VarietiesList from '../components/VarietiesList';
import Filter from '../../shared/components/FormElements/Filter'

import { useHttpClient } from '../../shared/hooks/http-hook';

const Varieties = () => {
  const [loadedVarieties, setLoadedVarieties] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchVarieties = async () => {
      try {
        const responseData = await sendRequest('https://coffee-varieties.now.sh/api');
        console.log('response: ', responseData);
        setLoadedVarieties(responseData);
      } catch (err) {
      }
    };
    fetchVarieties();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <div error={error} onClear={clearError}/>
      {isLoading && (
        <div className="center">
          Loading...
        </div>
      )}
      {!isLoading && loadedVarieties && <VarietiesList items={loadedVarieties} />}
      <Filter />
    </React.Fragment>
  );
};

export default Varieties;