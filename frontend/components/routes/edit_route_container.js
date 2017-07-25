import { connect } from 'react-redux';

import { updateRoute } from '../../actions/route_actions';

import EditRoute from './edit_route';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  updateRoute: route => dispatch(updateRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRoute);
