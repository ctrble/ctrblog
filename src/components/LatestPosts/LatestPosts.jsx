import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import useApiRoute from 'src/lib/hooks/useApiRoute';

import styles from './LatestPosts.module.scss';

const LatestPosts = ({ count }) => {
  const { data, isLoading, isError } = useApiRoute('/api/posts');

  if (isError) return <div className={styles.latestPosts}>failed to load</div>;
  if (isLoading) return <div className={styles.latestPosts}>loading...</div>;

  return (
    <div className={styles.latestPosts}>
      Latest Posts:
      <ul className={styles.latestPosts__list}>
        {data.slice(0, count).map(({ slug, frontmatter }) => (
          <li key={slug} className={styles.latestPosts__item}>
            <Link href="/posts/[slug]" as={`/posts/${slug}`}>
              <a className={styles.latestPosts__link}>
                {frontmatter.title}, {frontmatter.date}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

LatestPosts.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LatestPosts;
