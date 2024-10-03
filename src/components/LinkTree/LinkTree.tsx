import React from 'react';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';

import { URLS } from '@/data/constants';
import List from '@/components/List';
import WebLink from '@/components/WebLink';

import styles from './LinkTree.module.scss';

const items = [
  {
    id: 1,
    child: (
      <WebLink label='GitHub' className={styles.link} href={URLS.GITHUB}>
        <AiFillGithub size={styles.var_iconSize} />
      </WebLink>
    ),
  },
  {
    id: 2,
    child: (
      <WebLink label='Codepen' className={styles.link} href={URLS.CODEPEN}>
        <FiCodepen size={styles.var_iconSize} />
      </WebLink>
    ),
  },
  {
    id: 3,
    child: (
      <WebLink label='LinkedIn' className={styles.link} href={URLS.LINKEDIN}>
        <AiFillLinkedin size={styles.var_iconSize} />
      </WebLink>
    ),
  },
];

export default function LinkTree() {
  return (
    <aside>
      <List items={items} />
    </aside>
  );
}
