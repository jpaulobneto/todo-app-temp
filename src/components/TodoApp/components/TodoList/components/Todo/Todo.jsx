import React from 'react';
import PropTypes from 'prop-types';

export const Todo = ({
  id, text, completed, onClick,
}) => (
  <li
    onClick={() => onClick(id)}
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
  onClick() {
    console.log('TodoClicked');
  },
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
};
