import { connect } from 'react-redux';
import { signup, receiveErrors } from '../actions/session_actions';
import SignupForm from './signup';
import { withRouter } from 'react-router';


const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  resetErrors: () => dispatch(receiveErrors([]))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
