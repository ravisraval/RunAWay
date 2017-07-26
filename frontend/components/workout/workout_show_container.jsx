import { connect } from 'react-redux';

import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';
import { selectWorkout } from '../../reducers/selectors';
import WorkoutShow from './workout_show';
//
const mapStateToProps = (state, { match }) => ({
  workoutId: parseInt(match.params.workoutId),
  workout: selectWorkout(state, match.params.workoutId)
});

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id)),
  destroyWorkout: (workout) => dispatch(deleteWorkout(workout))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutShow);
