import { connect } from 'react-redux';
import { Footer as PresentationalComponent } from '../components/TodoApp/components/Footer/Footer';
import { setVisibilityFilter } from '../actions/actionCreators';

const mapStateToProps = state => ({
  currentFilter: state.visibilityFilter,
});
const mapDispatchToProps = dispatch => ({
  onFilterClick: filter => dispatch(setVisibilityFilter(filter)),
});

export const Footer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PresentationalComponent);
