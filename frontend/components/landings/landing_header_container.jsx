import { connect } from 'react-redux'
import { login, receiveErrors } from '../../actions/session_actions';
import LandingHeader from './landing_header';

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  resetErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingHeader);
