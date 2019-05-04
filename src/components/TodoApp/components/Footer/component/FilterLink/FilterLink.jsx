import React from 'react';

export const FilterLink = ({
  currentFilter, filter, children, onClick,
}) => (currentFilter === filter ? (
  <span>{children}</span>
) : (
  <a
    href="#"
    onClick={(ev) => {
      ev.preventDefault();
      onClick(filter);
    }}
  >
    {children}
  </a>
));
