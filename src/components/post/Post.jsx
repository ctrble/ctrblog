import React from 'react';
import PropTypes from 'prop-types';

import MarkdownContent from 'src/components/MarkdownContent';
import PostHeader from './PostHeader';

import styles from './Post.module.scss';

const Post = ({ title, date, description, content }) => (
  <article key={title} className={styles.post}>
    <PostHeader title={title} date={date} />

    <blockquote className={styles.post__description}>{description}</blockquote>

    <MarkdownContent content={content} />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
