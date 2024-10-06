import React from 'react';

import { render, screen, within } from '@testing-library/react';

import List from './List';

const mockItems = [
  { id: 1, child: <span>first child</span> },
  { id: 2, child: <span>second child</span> },
];

describe('List', () => {
  it('renders List with semantic elements', () => {
    render(<List items={mockItems} />);

    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(2);
  });
});
