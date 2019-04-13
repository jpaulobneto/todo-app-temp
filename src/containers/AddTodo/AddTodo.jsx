import { connect } from 'react-redux';
import { AddTodo as PresentationalComponent } from '../../components/TodoApp/components/AddTodo/AddTodo';
import { addTodo } from '../../actions/actionCreators';

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(addTodo(text)),
});

export const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationalComponent);
