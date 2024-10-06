import * as motion from 'framer-motion/client';

import {
  contentVariants,
  staggeredContentVariants,
  wrapperVariants,
  wrapperTransitions,
} from '@/data/animations';
import text from '@/data/text';

import LinkTree from '@/components/LinkTree';

import styles from './page.module.scss';

export default function Home() {
  return (
    <motion.main
      initial={wrapperVariants.initial}
      animate={wrapperVariants.loaded}
      transition={wrapperTransitions}
      className={styles.outer}
    >
      <div className={styles.inner}>
        <motion.section
          variants={staggeredContentVariants}
          initial='hidden'
          animate='visible'
          className={styles.content}
        >
          <motion.h1 variants={contentVariants}>{text.intro}</motion.h1>
          <motion.hr variants={contentVariants} />
          <motion.div variants={contentVariants}>
            <LinkTree />
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
