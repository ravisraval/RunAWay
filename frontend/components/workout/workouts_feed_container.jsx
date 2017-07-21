import { connect } from 'react-redux';

import WorkoutsFeed from './workouts_feed';
import { fetchWorkouts } from '../../actions/workout_actions';
import { selectUserWorkouts } from '../../reducers/selectors';

const mapStateToProps = state => ({
  workouts: selectUserWorkouts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(fetchWorkouts())
});

export default connect(
  null,
  mapDispatchToProps
)(WorkoutsFeed);
