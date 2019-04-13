import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ text, completed }) => (
  <li
    style={{
      cursor: 'pointer',
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.defaultProps = {
  completed: false,
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
