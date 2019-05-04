import { connect } from 'react-redux';
import { TodoList as PresentationalComponent } from '../../components/TodoApp/components/TodoList/TodoList';
import { toggleTodo } from '../../actions/actionCreators';

const getVisibleTodos = (todos, filter) => todos.filter((todo) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todo.completed === false;
    case 'SHOW_COMPLETED':
      return todo.completed === true;
    default:
      return true;
  }
});

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});
const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationalComponent);
