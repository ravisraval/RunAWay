import { connect } from 'react-router-dom'
import { login } from '../../actions/session_actions';
import LandingHeader from './landing_header';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LandingHeader);
