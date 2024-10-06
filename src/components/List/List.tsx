import React from 'react';

import styles from './List.module.scss';

type ListItem = {
  id: number;
  child: JSX.Element;
};

type List = {
  items: Array<ListItem>;
};

export default function List({ items }: List) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>{item.child}</li>
      ))}
    </ul>
  );
}
