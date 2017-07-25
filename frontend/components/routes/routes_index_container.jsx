import { connect } from 'react-redux';

import RoutesIndex from './routes_index';
import { fetchRoutes } from '../../actions/route_actions';
import { allRoutes } from '../../reducers/selectors';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesIndex);
