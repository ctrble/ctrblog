import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';

import { URLS } from '@/data/constants';

import List from '@/components/List';
import WebLink from '@/components/WebLink';

import styles from './page.module.scss';

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

export default function Home() {
  return (
    <main className={styles.outer}>
      <section className={styles.inner}>
        <div>
          <h1>Hey! I&apos;m Charlotte and I love building websites.</h1>
          <p>Making things move on the computer screen still sparks joy.</p>
          <hr />
          <h2>Find Me</h2>
          <List items={items} />
        </div>
      </section>
    </main>
  );
}
