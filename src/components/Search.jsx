import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import classnames from 'classnames';

import styles from './Search.module.scss';

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const { data: results } = useSWR(
    query.length ? `/api/search?q=${query}` : null,
    fetcher
  );
  const [active, setActive] = useState(false);

  // What is the current search term?
  const onChange = useCallback((event) => {
    const currentQuery = event.target.value;
    setQuery(currentQuery);
  }, []);

  // Is the field inactive?
  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
    return () => window.removeEventListener('click', onClick);
  }, []);

  // Is the field active?
  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [onClick]);

  const showResults = () => active && results && results.length;

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
      <ul
        className={classnames([styles.results, showResults() && styles.active])}
      >
        {showResults() && (
          <>
            {results.map(({ slug, frontmatter }) => (
              <li key={slug} className={styles.item}>
                <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                  <a className={styles.link}>{frontmatter.title}</a>
                </Link>
                {frontmatter.description}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
