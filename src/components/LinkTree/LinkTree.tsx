import React from 'react';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';

import { URLS } from '@/data/constants';
import List from '@/components/List';
import WebLink from '@/components/WebLink';

const items = [
  {
    id: 1,
    child: (
      <WebLink href={URLS.GITHUB}>
        <AiFillGithub />
      </WebLink>
    ),
  },
  {
    id: 2,
    child: (
      <WebLink href={URLS.CODEPEN}>
        <FiCodepen />
      </WebLink>
    ),
  },
  {
    id: 3,
    child: (
      <WebLink href={URLS.LINKEDIN}>
        <AiFillLinkedin />
      </WebLink>
    ),
  },
];

export default function LinkTree() {
  return (
    <>
      <h2>Find Me</h2>
      <List items={items} />
    </>
  );
}
