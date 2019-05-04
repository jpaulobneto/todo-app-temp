import React from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
    this.handleOnAddTodo = this.handleOnAddTodo.bind(this);
  }

  handleOnAddTodo() {
    const { onAddTodo } = this.props;
    const { value } = this.input.current;

    onAddTodo(value);

    this.input.current.value = '';
  }

  render() {
    return (
      <>
        <input
          name="addTodo"
          ref={this.input}
        />
        <button
          type="button"
          onClick={this.handleOnAddTodo}
        >
          Add
        </button>
      </>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
