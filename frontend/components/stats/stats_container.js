import { connect } from 'react-redux';
import Stats from './stats';
import { fetchWorkouts } from '../../actions/workout_actions';
import { allWorkouts } from '../../reducers/selectors';

const mapStateToProps = state => ({
  username: state.session.currentUser.username,
  workouts: allWorkouts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(fetchWorkouts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
