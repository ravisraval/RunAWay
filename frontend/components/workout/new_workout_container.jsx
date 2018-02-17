import { connect } from 'react-redux';
import NewWorkout from './new_workout';
import { createWorkout } from '../../actions/workout_actions';
import { fetchRoutes } from '../../actions/route_actions';
import { allRoutes } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.workouts.errors,
  routes: allRoutes(state)
});

const mapDispatchToProps = dispatch => ({
  createWorkout: workout => dispatch(createWorkout(workout)),
  fetchRoutes: () => dispatch(fetchRoutes())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkout);
