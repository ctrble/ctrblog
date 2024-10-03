import React from 'react';

type ListItem = {
  id: number;
  child: JSX.Element;
};

type List = {
  items: Array<ListItem>;
};

export default function List({ items }: List) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.child}</li>
      ))}
    </ul>
  );
}
