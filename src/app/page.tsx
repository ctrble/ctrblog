import WebLink from '@/components/WebLink';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        I've always been drawn to technology and computers, particularly when
        they pose a challenge to be solved. I first got started with web
        development when I was a teenager – I even remember writing pseudo-code
        in a paper notebook while on vacation very far away from my computer.
        Since then I've fixed countless computers as a certified technician,
        created many video-games as a fun hobby and co-founded Flyover Indies (a
        Kansas City area indie game developer community), and led the
        development of high traffic, delightful websites that truly are all fun
        and games (including a Webby award winner!).
      </p>

      <p>
        Tackling interesting problems and devising solutions brings me joy,
        which is why I love software engineering. I'm passionate about code that
        is clear, clean, and consistent. I care deeply about mentoring other
        engineers and learning from them, delivering on business priorities
        while balancing technical needs, and serving end-users with an amazing
        experience. I'm open-minded and adaptable, thrive in a cross functional
        and collaborative environment, and am not afraid of diving into
        something unknown or ambiguous.
      </p>

      <p>
        My ideal tech stack includes React (particularly Next.js), SCSS Modules,
        code quality tools (like ESLint, Stylelint, and Prettier), Jest and
        Playwright tests, Storybook documentation, and CI/CD integration via
        GitHub Actions. That said, the opportunity to learn new things is always
        exciting and I'm a pretty quick study.
      </p>
      <h2>Find Me</h2>
      <ol>
        <li>
          <WebLink href='https://github.com/ctrble'>GitHub</WebLink>
        </li>
        <li>
          <WebLink href='www.linkedin.com/in/charlotte-trible'>
            LinkedIn
          </WebLink>
        </li>
      </ol>
    </main>
  );
}
