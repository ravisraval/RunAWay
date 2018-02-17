import * as APIUtil from '../util/workout_util'

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const RECEIVE_WORKOUTS_ERRORS = "RECEIVE_WORKOUTS_ERRORS";

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

export const receiveWorkoutsErrors = errors => ({
  type: RECEIVE_WORKOUTS_ERRORS,
  errors
});

export const fetchWorkouts = () => dispatch => (
  APIUtil.fetchWorkouts().then(
    workouts => dispatch(receiveWorkouts(workouts)),
    err => dispatch(receiveWorkoutsErrors(err.responseJSON))
  )
);

export const fetchWorkout = id => dispatch => (
  APIUtil.fetchWorkout(id).then(
    workout => dispatch(receiveWorkout(workout)),
    err => dispatch(receiveWorkoutsErrors(err.responseJSON))
  )
);

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout).then(
    workout => dispatch(receiveWorkout(workout)),
    err => dispatch(receiveWorkoutsErrors(err.responseJSON))
  )
);

export const updateWorkout = workout => dispatch => (
  APIUtil.updateWorkout(workout).then(
    workout => dispatch(receiveWorkout(workout)),
    err => dispatch(receiveWorkoutsErrors(err.responseJSON))
  )
);

export const deleteWorkout = workout => dispatch => (
  APIUtil.deleteWorkout(workout).then(() => dispatch(removeWorkout(workout))));
