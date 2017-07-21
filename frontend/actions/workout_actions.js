import * as APIUtil from '../util/workout_util'

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
// export const REQUEST_WORKOUT = 'REQUEST_WORKOUT';

export const receiveWorkouts = workouts => ({
  type: RECEIVE_WORKOUTS,
  workouts
});

export const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout
});

export const removeWorkout = workout => ({
  type: REMOVE_WORKOUT,
  workout
});

export const fetchWorkouts = () => dispatch => (
  APIUtil.fetchWorkouts().then(workouts => (
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

export const deleteWorkout = workout => dispatch => (
  APIUtil.deleteWorkout(workout).then(workout => dispatch(removeWorkout(workout))));
