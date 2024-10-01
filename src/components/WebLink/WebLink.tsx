import React from 'react';

import Link from 'next/link';

import isUrl from './isUrl';

import styles from './WebLink.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
export default function WebLink({
  children,
  className,
  href,
  isTargetBlank,
  nextLinkProps,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  className?: string | object;
  href: string;
  isTargetBlank: boolean;
  nextLinkProps: object;
  onClick?: () => void;
}) {
  const isNewTab = isTargetBlank
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : null;

  if (isUrl(href)) {
    return (
      <a
        className={className || styles.webLink}
        href={href}
        onClick={onClick}
        {...isNewTab}
        {...props}
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
      {...nextLinkProps}
      {...isNewTab}
      {...props}
    >
      {children}
    </Link>
  );
}
