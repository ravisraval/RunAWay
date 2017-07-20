import { connect } from 'react-redux';

import { logout } from '../actions/session_actions';
import Nav from './nav';

const mapStateToProps = state => ({
  username: state.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  logout: user => dispatch(logout(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
