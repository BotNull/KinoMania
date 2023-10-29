import React from 'react';

import '@ItemList/style.css';
import { useDispatch } from 'react-redux';

const ItemList = ({ items, current, itemAction }) => {
  const dispatch = useDispatch();

  return (
    <ul className="items">
      {items.map(({ comment }, i) => (
        <li
          key={i}
          className={`item ${current === i ? 'active' : ''}`}
          onClick={() => dispatch(itemAction(i))}
        >
          {comment.replace(
            /<[a-zA-Z][a-zA-Z\d]*(\s.*?)?>(.*?<\/[a-zA-Z][a-zA-Z\d]*>)/,
            '',
          )}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
