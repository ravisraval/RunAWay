import { connect } from 'react-redux';

import { fetchWorkout } from '../../actions/workout_actions';
// import { selectWorkout } from '../../reducers/selectors';
import WorkoutShow from './workout_show';
//
// const mapStateToProps = (state, { match }) => {
//   const workoutId = parseInt(match.params.workoutId);
//   const workout = selectWorkout(state, match.params.workoutId);
//   return {
//     workoutId,
//     workout
//   };
// };

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id))
});

export default connect(
  null,
  mapDispatchToProps
)(WorkoutShow);
