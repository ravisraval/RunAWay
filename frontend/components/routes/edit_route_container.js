import { connect } from 'react-redux';

import { updateRoute, fetchRoute } from '../../actions/route_actions';
import { selectRoute } from '../../reducers/selectors';

import EditRoute from './edit_route';
//

const mapStateToProps = (state, { match }) => ({
  routeId: parseInt(match.params.routeId),
  route: selectRoute(state, match.params.routeId).
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  updateRoute: route => dispatch(updateRoute(route)),
  fetchRoute: id => dispatch(fetchRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRoute);
