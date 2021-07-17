import React from 'react';
import Link from 'next/link';

import Search from 'src/components/Search';

import styles from './SiteHeader.module.scss';

const SiteHeader = () => (
  <header className={styles.siteHeader}>
    <nav className={styles.siteHeader__nav}>
      <Link href="/">
        <a className={styles.siteHeader__link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.siteHeader__link}>About</a>
      </Link>
    </nav>
    <Search />
  </header>
);

export default SiteHeader;
