import React from 'react';

import { render, screen } from '@testing-library/react';

import WebLink from './WebLink';

describe('WebLink', () => {
  test('renders WebLink with an href', () => {
    render(<WebLink href='/'>Hello World</WebLink>);

    const link = screen.getByRole('link', { name: /hello world/i });

    expect(link.href).toContain('/');
    expect(link.rel).toBeFalsy();
    expect(link.target).toBeFalsy();
  });

  test('renders WebLink with new tab attributes when an external href is provided', () => {
    render(
      <WebLink href='https://google.com/' isTargetBlank>
        Go
      </WebLink>,
    );

    const link = screen.getByRole('link', { name: /go/i });

    expect(link.href).toContain('google.com');
    expect(link.rel).toContain('noopener noreferrer');
    expect(link.target).toContain('_blank');
  });

  test('renders WebLink with the correct class', () => {
    const { rerender } = render(<WebLink href='/'>Hello World</WebLink>);

    const link = screen.getByRole('link', { name: /hello world/i });

    expect(link.classList.contains('webLink')).toBe(true);

    rerender(
      <WebLink className='test' href='/'>
        Hello World
      </WebLink>,
    );

    expect(link.classList.contains('webLink')).toBe(false);
    expect(link.classList.contains('test')).toBe(true);
  });
});
