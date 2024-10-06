import * as m from 'framer-motion/m';
import { LazyMotion, domAnimation } from 'framer-motion';

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
    <LazyMotion features={domAnimation}>
      <m.main
        initial={wrapperVariants.initial}
        animate={wrapperVariants.loaded}
        transition={wrapperTransitions}
        className={styles.outer}
      >
        <div className={styles.inner}>
          <m.section
            variants={staggeredContentVariants}
            initial='hidden'
            animate='visible'
            className={styles.content}
          >
            <m.h1 variants={contentVariants}>{text.intro}</m.h1>
            <m.hr variants={contentVariants} />
            <m.div variants={contentVariants}>
              <LinkTree />
            </m.div>
          </m.section>
        </div>
      </m.main>
    </LazyMotion>
  );
}
