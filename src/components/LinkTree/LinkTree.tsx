import React from 'react';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';
import { FaItchIo } from 'react-icons/fa6';

import { URLS } from '@/data/constants';

import FlyoverIndies from '@/components/icons/FlyoverIndies';
import List from '@/components/List';
import WebLink from '@/components/WebLink';

import styles from './LinkTree.module.scss';

// TODO: also add itch.io
const items = [
  {
    id: 1,
    child: (
      <WebLink label='GitHub' className={styles.link} href={URLS.GITHUB}>
        <AiFillGithub />
      </WebLink>
    ),
  },
  {
    id: 2,
    child: (
      <WebLink label='Codepen' className={styles.link} href={URLS.CODEPEN}>
        <FiCodepen />
      </WebLink>
    ),
  },
  {
    id: 3,
    child: (
      <WebLink label='LinkedIn' className={styles.link} href={URLS.LINKEDIN}>
        <AiFillLinkedin />
      </WebLink>
    ),
  },
  {
    id: 4,
    child: (
      <WebLink
        label='Flyover Indies'
        className={styles.link}
        href={URLS.FLYOVER_INDIES}
      >
        <FlyoverIndies />
      </WebLink>
    ),
  },
  {
    id: 5,
    child: (
      <WebLink label='Itch.io' className={styles.link} href={URLS.ITCHIO}>
        <FaItchIo />
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
