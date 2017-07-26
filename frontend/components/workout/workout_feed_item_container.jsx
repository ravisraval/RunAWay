import { connect } from 'react-redux';

import WorkoutFeedItem from './workout_feed_item';
import { deleteWorkout } from '../../actions/workout_actions';
import { fetchRoute } from '../../actions/route_actions';
import { selectRoute } from '../../reducers/selectors';
//

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  // route: selectRoute(state, state.workout.route_id)
});

const mapDispatchToProps = (dispatch, {workout}) => ({
  fetchRoute: id => dispatch(fetchRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutFeedItem);
