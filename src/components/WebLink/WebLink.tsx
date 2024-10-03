import React from 'react';

import Link from 'next/link';

import isUrl from './isUrl';

import styles from './WebLink.module.scss';

type WebLink = {
  children: React.ReactNode;
  className?: string | undefined;
  href: string;
  label?: string;
  nextLinkProps?: object;
  onClick?: () => void | undefined;
};

export default function WebLink({
  children,
  className,
  href,
  label,
  onClick,
}: WebLink) {
  if (isUrl(href)) {
    return (
      <a
        aria-label={label}
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
    <Link
      aria-label={label}
      className={className || styles.webLink}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
