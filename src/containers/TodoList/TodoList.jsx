import { connect } from 'react-redux';
import { TodoList as PresentationalComponent } from '../../components/TodoApp/components/TodoList/TodoList';
import { toggleTodo } from '../../actions/actionCreators';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id)),
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationalComponent);
