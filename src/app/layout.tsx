import type { Metadata } from 'next';
import { Martian_Mono, Palanquin_Dark } from 'next/font/google';
import classNames from 'classnames';

import '@/styles/index.scss';

const martianMono = Martian_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-martian-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const palanquinDark = Palanquin_Dark({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-palanquin-dark',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Developer Party',
  description: "const CHARLOTTE_TRIBLE = 'dev'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={classNames(martianMono.variable, palanquinDark.variable)}
      >
        {children}
      </body>
    </html>
  );
}
