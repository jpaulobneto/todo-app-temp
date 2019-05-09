import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TodoList as PresentationalComponent } from '../components/TodoApp/components/TodoList/TodoList';
import { toggleTodo } from '../actions/actionCreators';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(todo => todo.completed);
    case 'active':
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || 'all'),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationalComponent));
