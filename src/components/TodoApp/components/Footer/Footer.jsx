import React from 'react';
import { FilterLink } from './component/FilterLink/FilterLink';

export const Footer = ({ currentFilter, onFilterClick }) => (
  <div className="footer">
    <FilterLink currentFilter={currentFilter} filter="SHOW_ALL" onClick={onFilterClick}>
      All
    </FilterLink>
    {' '}
    <FilterLink currentFilter={currentFilter} filter="SHOW_ACTIVE" onClick={onFilterClick}>
      Active
    </FilterLink>
    {' '}
    <FilterLink currentFilter={currentFilter} filter="SHOW_COMPLETED" onClick={onFilterClick}>
      Completed
    </FilterLink>
    {' '}
  </div>
);
