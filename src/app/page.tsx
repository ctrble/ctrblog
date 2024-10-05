import * as motion from 'framer-motion/client';
import { GoFileCode } from 'react-icons/go';

import LinkTree from '@/components/LinkTree';
import WebLink from '@/components/WebLink';
import { URLS } from '@/data/constants';

import styles from './page.module.scss';

const animationVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  loaded: {
    opacity: 1,
    scale: 1,
  },
};

export default function Home() {
  return (
    <motion.main
      initial={animationVariants.initial}
      animate={animationVariants.loaded}
      transition={{ duration: 0.5, easing: 'ease-in-out' }}
      className={styles.outer}
    >
      <div className={styles.inner}>
        <section className={styles.content}>
          <h1>Hey! I&apos;m Charlotte and I love building websites.</h1>
          <p>
            Playful experiences are my jam. If you&apos;re looking for an
            experienced and pragmatic front-end engineer, I&apos;m your gal!
          </p>
          <hr />
          <LinkTree />
        </section>

        {/* TODO: clean this up */}
        <footer className={styles.footer}>
          <WebLink
            className={styles.footer__link}
            href={URLS.SOURCE}
            label='view source'
          >
            <GoFileCode size={16} />
          </WebLink>
        </footer>
      </div>
    </motion.main>
  );
}
