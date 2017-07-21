import { connect } from 'react-redux';

import WorkoutsFeed from './workouts_feed';
import { fetchWorkouts } from '../../actions/workout_actions';
import { allWorkouts } from '../../reducers/selectors';

const mapStateToProps = state => ({
  workouts: allWorkouts(state)
})

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(fetchWorkouts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutsFeed);
