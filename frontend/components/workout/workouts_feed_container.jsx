import { connect } from 'react-redux';

import WorkoutsFeed from './workouts_feed';


const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  null,
  mapDispatchToProps
)(WorkoutsFeed);
