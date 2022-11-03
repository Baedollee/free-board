import React, { useEffect, useState } from 'react';

const useDebounce = (val, delay = 150) => {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [val, delay]);

  return debounceVal;
};

export default useDebounce;
