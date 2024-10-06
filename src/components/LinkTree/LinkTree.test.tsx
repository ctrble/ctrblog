import React from 'react';

import { render, screen } from '@testing-library/react';

import LinkTree from './LinkTree';

describe('LinkTree', () => {
  it('renders List with semantic elements', () => {
    render(<LinkTree />);

    const links = screen.getAllByRole('link');
    expect(links.length).toEqual(5);
  });
});
