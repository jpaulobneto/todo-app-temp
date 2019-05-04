import React from 'react';
import { FilterLink } from './component/FilterLink/FilterLink';

export const Footer = () => (
  <div className="footer">
    <FilterLink filter="all">
      All
    </FilterLink>
    {' '}
    <FilterLink filter="active">
      Active
    </FilterLink>
    {' '}
    <FilterLink filter="completed">
      Completed
    </FilterLink>
    {' '}
  </div>
);
