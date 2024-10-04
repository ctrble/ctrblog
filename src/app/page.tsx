import LinkTree from '@/components/LinkTree';
import * as motion from 'framer-motion/client';
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
      <section className={styles.inner}>
        <div>
          <h1>Hey! I&apos;m Charlotte and I love building websites.</h1>
          <p>
            Playful experiences and highly tuned efficiency are my jam. If
            you're looking for an experienced and pragmatic front-end engineer,
            I'm your gal!
          </p>
          <hr />
          <LinkTree />
        </div>
      </section>
    </motion.main>
  );
}
