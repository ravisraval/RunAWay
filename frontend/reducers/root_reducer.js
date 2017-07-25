import { combineReducers } from 'redux'

import SessionReducer from './session_reducer';
import WorkoutReducer from './workout_reducer';
import RouteReducer from './route_reducer';

export default combineReducers({
  workouts: WorkoutReducer,
  routes: RouteReducer,
  session: SessionReducer
});
