import * as motion from 'framer-motion/client';

import text from '@/data/text';
import LinkTree from '@/components/LinkTree';

import styles from './page.module.scss';

const wrapperVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  loaded: {
    opacity: 1,
    scale: 1,
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    rotate: 10,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    rotate: 0,
  },
};

export default function Home() {
  return (
    <motion.main
      initial={wrapperVariants.initial}
      animate={wrapperVariants.loaded}
      transition={{ duration: 0.5, easing: 'ease-in-out' }}
      className={styles.outer}
    >
      <div className={styles.inner}>
        <motion.section
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          layout
          initial='hidden'
          animate='visible'
          className={styles.content}
        >
          <motion.h1 variants={contentVariants}>{text.intro}</motion.h1>
          <motion.p variants={contentVariants}>{text.about}</motion.p>
          <motion.hr variants={contentVariants} />
          <motion.div variants={contentVariants}>
            <LinkTree />
          </motion.div>
        </motion.section>
      </div>
    </motion.main>
  );
}
