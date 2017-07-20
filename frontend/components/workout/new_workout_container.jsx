import { connect } from 'react-redux';
import NewWorkout from './new_workout';
// import { createPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  createWorkout: workout => dispatch(createWorkout(workout))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkout);
