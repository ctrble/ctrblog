import React from 'react';

import { render, screen } from '@testing-library/react';

import WebLink from './WebLink';

describe('WebLink', () => {
  test('renders WebLink with an href', () => {
    render(<WebLink href='/'>Hello World</WebLink>);

    const link = screen.getByRole('link', { name: /hello world/i });

    // expect(link).toBeVisible();
    expect(link.href).toContain('/');
    expect(link.rel).toBeFalsy();
    expect(link.target).toBeFalsy();
    // expect(link).toHaveClass('webLink');
  });

  // test('renders WebLink with a div when no href is provided', () => {
  //   render(<WebLink>Not a link</WebLink>);

  //   const link = screen.getByText(/not a link/i);

  //   // expect(link).toBeVisible();
  //   expect(link.href).toBeFalsy();
  //   // expect(link).toHaveClass('webLink');
  // });

  test('renders WebLink with new tab attributes when an external href is provided', () => {
    render(
      <WebLink href='https://google.com/' isTargetBlank>
        Go
      </WebLink>,
    );

    const link = screen.getByRole('link', { name: /go/i });

    // expect(link).toBeVisible();
    expect(link.href).toContain('google.com');
    expect(link.rel).toContain('noopener noreferrer');
    expect(link.target).toContain('_blank');
    // expect(link).toHaveClass('webLink');
  });
});
