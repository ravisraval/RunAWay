import merge from 'lodash/merge';

import {
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT,
  REMOVE_WORKOUT,
  RECEIVE_WORKOUTS_ERRORS
} from '../actions/workout_actions';

const defaultState = Object.freeze({
  entities: [],
  errors: []
});

const RouteReducer = (state = defaultState, action) => {
  Object.freeze(state);

  let nextState;

  switch(action.type) {
    case RECEIVE_WORKOUTS:
      nextState = Object.assign(
        {}, state, { entities: Object.values(action.workouts) }
      );
      return nextState;
    case RECEIVE_WORKOUT:
      nextState = Object.assign({},state);
      nextState.entities[action.workout.id] = action.workout;
      return nextState;
    case REMOVE_WORKOUT:
      nextState = Object.assign({}, state);
      delete nextState.entities[action.workout.id];
      return nextState;
    case RECEIVE_WORKOUTS_ERRORS:
        const errors = action.errors;
        nextState = Object.assign({}, state, { errors });
        return nextState;
    default:
      return state;
  }
};

export default RouteReducer;
