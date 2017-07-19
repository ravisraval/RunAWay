import { connect } from 'react-redux'
import { login } from '../../actions/session_actions';
import LandingHeader from './landing_header';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingHeader);
