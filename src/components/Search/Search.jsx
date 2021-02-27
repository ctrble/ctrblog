import React, { useCallback, useRef, useState } from 'react';
import useSWR from 'swr';

import SearchResults from './SearchResults';

import styles from './Search.module.scss';

const fetcher = (url) => fetch(url).then((response) => response.json());

const Search = () => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const { data: results } = useSWR(
    query.length ? `/api/search?q=${query}` : null,
    fetcher
  );
  const [isActive, setIsActive] = useState(false);

  // What is the current search term?
  const onChange = useCallback((event) => {
    const currentQuery = event.target.value;
    setQuery(currentQuery);
  }, []);

  // Is the field inactive?
  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsActive(false);
      window.removeEventListener('click', onClick);
    }
    return () => window.removeEventListener('click', onClick);
  }, []);

  // Is the field active?
  const onFocus = useCallback(() => {
    setIsActive(true);
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [onClick]);

  const showResults = () => isActive && results && results.length > 0;

  return (
    <div ref={searchRef} className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        className={styles.input}
        value={query}
        onChange={onChange}
        onFocus={onFocus}
      />
      <SearchResults isOpen={showResults()} results={results} />
    </div>
  );
};

export default Search;
