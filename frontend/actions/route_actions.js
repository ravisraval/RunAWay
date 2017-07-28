import * as APIUtil from '../util/map_route_util'

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_ROUTE = "REMOVE_ROUTE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// export const REQUEST_ROUTE = 'REQUEST_ROUTE';

export const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes
});

export const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

export const removeRoute = route => ({
  type: REMOVE_ROUTE,
  route
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchRoutes = () => dispatch => (
  APIUtil.fetchRoutes().then(routes => (
    dispatch(receiveRoutes(routes))
  ))
);

export const fetchRoute = id => dispatch => (
  APIUtil.fetchRoute(id).then(route => (
    dispatch(receiveRoute(route))
  ))
);

export const createRoute = route => dispatch => (
  APIUtil.createRoute(route).then(route => {
    return (
      dispatch(receiveRoute(route))
    );
  }, err => {
  })
);

export const updateRoute = route => dispatch => (
  APIUtil.updateRoute(route).then(route => dispatch(receiveRoute(route)))
);

export const deleteRoute = route => dispatch => (
  APIUtil.deleteRoute(route).then(() => dispatch(removeRoute(route))));
