import { useState } from 'react';

// CONVERTED (CORRECTLY?) FROM TYPESCRIPT ??
// SOURCE: https://dev.to/brettfishy/the-easiest-way-to-use-query-parameters-in-react-1ioe

const getQuery = () => {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search);
  }
  return new URLSearchParams();
};

const getQueryStringVal = (key = null) => getQuery().get(key);

const useQueryParam = (key) => {
  const [query, setQuery] = useState(getQueryStringVal(key));

  const updateUrl = (newVal) => {
    setQuery(newVal);

    const query = getQuery();

    if (newVal.trim() !== '') {
      query.set(key, newVal);
    } else {
      query.delete(key);
    }

    if (typeof window !== 'undefined') {
      const { protocol, pathname, host } = window.location;
      const newUrl = `${protocol}//${host}${pathname}?${query.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  return [query, updateUrl];
};

export default useQueryParam;