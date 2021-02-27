import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageHeader.module.scss';

const PageHeader = ({ title, description }) => (
  <div className={styles.pageHeader}>
    <header className={styles.pageHeader__title}>
      <h3>{title}</h3>
    </header>
    {description && (
      <p className={styles.pageHeader__description}>{description}</p>
    )}
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

PageHeader.defaultProps = {
  description: PropTypes.null,
};

export default PageHeader;
