import { connect } from 'react-redux';

import RouteIndexItem from './route_index_item';
import { deleteRoute } from '../../actions/route_actions';


const mapDispatchToProps = (dispatch, {route}) => ({
  destroyRoute: () => dispatch(deleteRoute(route))
});

export default connect(
  null,
  mapDispatchToProps
)(RouteIndexItem);
