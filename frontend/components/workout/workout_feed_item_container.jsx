import { connect } from 'react-redux';

import WorkoutFeedItem from './workout_feed_item';
import { deleteWorkout } from '../../actions/workout_actions';


const mapDispatchToProps = (dispatch, {workout}) => ({
  destroyWorkout: () => dispatch(deleteWorkout(workout))
});

export default connect(
  null,
  mapDispatchToProps
)(WorkoutFeedItem);
