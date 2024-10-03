import LinkTree from '@/components/LinkTree';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.outer}>
      <section className={styles.inner}>
        <div>
          <h1>Hey! I&apos;m Charlotte and I love building websites.</h1>
          <p>Making things move on the computer screen still sparks joy.</p>
          <hr />
          <LinkTree />
        </div>
      </section>
    </main>
  );
}
