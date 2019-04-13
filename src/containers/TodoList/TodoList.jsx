import { connect } from 'react-redux';
import { TodoList as PresentationalComponent } from '../../components/TodoApp/components/TodoList/TodoList';

const mapStateToProps = state => state;
// const mapDispatchToProps = (dispatch) => {};

export const TodoList = connect(
  mapStateToProps,
  // mapDispatchToProps,
)(PresentationalComponent);
