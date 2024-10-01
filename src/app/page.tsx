import WebLink from '@/components/WebLink';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Hey! I'm Charlotte and I love building websites.</h1>
        <p>
          I’ve always been fascinated by technology, especially when it involves
          solving tricky challenges. My journey into web development began in my
          teenage years when I wrote pseudo-code in a notebook while on
          vacation! Since then, I’ve worked as a certified technician, created
          video games as a hobby, co-founded Flyover Indies (an indie game dev
          community in Kansas City), and led the development of high-traffic,
          engaging websites, including a Webby award winner. I find joy in
          tackling interesting problems, and I’m passionate about clean,
          consistent code. I love mentoring and learning from fellow engineers,
          balancing business priorities with technical needs, and creating
          amazing user experiences. I thrive in collaborative environments and
          am always eager to dive into new challenges. My favorite tech stack
          includes React (especially Next.js), SCSS Modules, and various code
          quality tools, but I’m excited to learn new things and adapt quickly!
        </p>
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
    </main>
  );
}
