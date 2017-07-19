import { connect } from 'react-redux';

import { signup } from '../actions/session_actions';
import SignupForm from './signup';


const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
