import merge from 'lodash/merge';

import {
  RECEIVE_ROUTES,
  RECEIVE_ROUTE,
  REMOVE_ROUTE,
  RECEIVE_ROUTES_ERRORS
} from '../actions/route_actions';

const defaultState = Object.freeze({
  entities: [],
  errors: []
});

const RouteReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let nextState;

  switch(action.type) {
    case RECEIVE_ROUTES:
      nextState = Object.assign(
        {}, state, { entities: Object.values(action.routes) }
      );
      return nextState;
    case RECEIVE_ROUTE:
      nextState = Object.assign({},state);
      nextState.entities[action.route.id] = action.route;
      return nextState;
    case REMOVE_ROUTE:
      nextState = Object.assign({}, state);
      delete nextState.entities[action.route.id];
      return nextState;
    case RECEIVE_ROUTES_ERRORS:
        const errors = action.errors;
        nextState = Object.assign({}, state, { errors });
        return nextState;
    default:
      return state;
  }
};

export default RouteReducer;
