import { connect } from 'react-redux';
import Stats from './stats';

const mapStateToProps = state => ({
  username: state.session.currentUser.username
});

export default connect(mapStateToProps, null)(Stats);
