import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './SearchResults.module.scss';

// TODO: look into framer motion

const SearchResults = ({ isOpen, results }) => (
  <ul
    className={classnames([
      styles.searchResults,
      isOpen && styles.searchResults_active,
    ])}
  >
    {isOpen && (
      <>
        {results &&
          results.map(({ slug, frontmatter }) => (
            <li key={slug} className={styles.searchResults__item}>
              <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                <a className={styles.searchResults__link}>
                  {frontmatter.title}
                </a>
              </Link>
              {frontmatter.description}
            </li>
          ))}
      </>
    )}
  </ul>
);

SearchResults.propTypes = {
  isOpen: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.object),
};

SearchResults.defaultProps = {
  isOpen: false,
  results: null,
};

export default SearchResults;
