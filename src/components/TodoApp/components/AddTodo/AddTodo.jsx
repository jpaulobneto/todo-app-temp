import React from 'react';
import PropTypes from 'prop-types';

export const AddTodo = ({ onAddTodo }) => {
  let input;

  return (
    <>
      <input
        name="addTodo"
        ref={(node) => {
          input = node;
        }}
      />
      <button
        type="button"
        onClick={() => {
          onAddTodo(input.value);
          input.value = '';
        }}
      >
        Add
      </button>
    </>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
