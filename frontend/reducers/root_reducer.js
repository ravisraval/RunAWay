import { combineReducers } from 'redux'

import SessionReducer from './session_reducer';
import WorkoutReducer from './workout_reducer';

export default combineReducers({
  workouts: WorkoutReducer,
  session: SessionReducer
});
