import React from 'react';

import Link from 'next/link';

import isUrl from './isUrl';

import styles from './WebLink.module.scss';

type WebLink = {
  children: React.ReactNode;
  className?: string | undefined;
  href: string;
  nextLinkProps?: object;
  onClick?: () => void | undefined;
};

export default function WebLink({
  children,
  className,
  href,
  onClick,
}: WebLink) {
  if (isUrl(href)) {
    return (
      <a
        className={className || styles.webLink}
        href={href}
        onClick={onClick}
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className || styles.webLink} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
