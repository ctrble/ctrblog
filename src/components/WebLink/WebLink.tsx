import React from 'react';

import Link from 'next/link';

import isUrl from './isUrl';

import styles from './WebLink.module.scss';

type WebLink = {
  children: React.ReactNode;
  className?: string | undefined;
  href: string;
  isTargetBlank?: boolean;
  nextLinkProps?: object;
  onClick?: () => void | undefined;
};

export default function WebLink({
  children,
  className,
  href,
  isTargetBlank,
  onClick,
}: WebLink) {
  if (isUrl(href)) {
    return (
      <a
        className={className || styles.webLink}
        href={href}
        onClick={onClick}
        rel={isTargetBlank ? 'noopener noreferrer' : undefined}
        target={isTargetBlank ? '_blank' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className={className || styles.webLink}
      href={href}
      onClick={onClick}
      rel={isTargetBlank ? 'noopener noreferrer' : undefined}
      target={isTargetBlank ? '_blank' : undefined}
    >
      {children}
    </Link>
  );
}
