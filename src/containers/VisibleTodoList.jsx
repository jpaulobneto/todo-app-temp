import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TodoList as PresentationalComponent } from '../components/TodoApp/components/TodoList/TodoList';
import { toggleTodo } from '../actions/actionCreators';
import { getVisibleTodos } from '../rootReducer';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all'),
});

export const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo },
)(PresentationalComponent));
