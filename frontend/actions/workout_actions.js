import * as APIUtil from '../util/workout_util'

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const REQUEST_WORKOUT = 'REQUEST_WORKOUT';

export const receiveWorkouts = workouts => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const fetchWorkouts = filters => dispatch => (
  APIUtil.fetchWorkouts(filters).then(workouts => (
    dispatch(receiveWorkouts(workouts))
  ))
);

export const fetchWorkout = id => dispatch => (
  APIUtil.fetchWorkout(id).then(workout => (
    dispatch(receiveWorkout(workout))
  ))
);

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout).then(workout => (
    dispatch(receiveWorkout(workout))
  ))
);
