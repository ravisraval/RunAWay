import { connect } from 'react-redux';

import { fetchRoute } from '../../actions/route_actions';
import { selectRoute } from '../../reducers/selectors';
import RouteShow from './route_show';
//
const mapStateToProps = (state, { match }) => ({
  routeId: parseInt(match.params.routeId),
  route: selectRoute(state, match.params.routeId)
});

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow);
