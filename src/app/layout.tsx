import type { Metadata } from "next";
import { Belanosima, Martian_Mono } from 'next/font/google'

import "@/styles/index.scss";

const belanosima = Belanosima({
  display: 'swap',
  subsets: ['latin'],
  variable: "--font-belanosima",
  weight: ['400', '600', '700'],
})

const martianMono = Martian_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: "--font-martian-mono",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: "Developer Party",
  description: "const CHARLOTTE_TRIBLE = 'dev'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${belanosima.variable} ${martianMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
