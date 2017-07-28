import { connect } from 'react-redux';

import { createRoute } from '../../actions/route_actions';

import Map from './map';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  createRoute: route => dispatch(createRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
