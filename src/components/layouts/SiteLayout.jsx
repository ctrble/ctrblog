import React from 'react';
import PropTypes from 'prop-types';

import SiteHeader from 'src/components/SiteHeader';

import styles from './SiteLayout.module.scss';

const SiteLayout = ({ children }) => (
  <div className={styles.siteLayout}>
    <SiteHeader />
    <main className={styles.siteLayout__main}>
      <section className={styles.siteLayout__content}>{children}</section>
    </main>
  </div>
);

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
