import { connect } from 'react-redux';

import WorkoutFeedItem from './workout_feed_item';
import { deleteWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';
import { allRoutes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  routes: allRoutes(state)
});

const mapDispatchToProps = (dispatch, {workout}) => ({
  destroyWorkout: () => dispatch(deleteWorkout(workout)),
  fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutFeedItem);
