import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostHeader.module.scss';

const PostHeader = ({ title, date }) => (
  <header className={styles.postHeader}>
    <h1 className={styles.postHeader__title}>{title}</h1>
    <span className={styles.postHeader__date}>{date}</span>
  </header>
);

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
