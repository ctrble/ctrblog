import WebLink from '@/components/WebLink';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiCodepen } from 'react-icons/fi';

import { URLS } from '@/data/constants';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.outer}>
      <section className={styles.inner}>
        <div>
          <h1>Hey! I&apos;m Charlotte and I love building websites.</h1>
          <p>Making things move on the computer screen still sparks joy.</p>
          <hr />
          <h2>Find Me</h2>
          <ul>
            <li>
              <WebLink href={URLS.GITHUB}>
                <AiFillGithub />
              </WebLink>
            </li>
            <li>
              <WebLink href={URLS.CODEPEN}>
                <FiCodepen />
              </WebLink>
            </li>
            <li>
              <WebLink href={URLS.LINKEDIN}>
                <AiFillLinkedin />
              </WebLink>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
