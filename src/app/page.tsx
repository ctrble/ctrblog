import WebLink from '@/components/WebLink';

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
          <ol>
            <li>
              <WebLink href='https://github.com/ctrble'>GitHub</WebLink>
            </li>
            <li>
              <WebLink href='https://codepen.io/ctrble'>Codepen</WebLink>
            </li>
            <li>
              <WebLink href='www.linkedin.com/in/charlotte-trible'>
                LinkedIn
              </WebLink>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
