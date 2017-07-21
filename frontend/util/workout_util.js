export const fetchWorkouts = function(data, success, error) {
  $.ajax({
    method: 'GET',
    url: '/api/workouts',
    data
  })
};

export const fetchWorkout = function(id, success, error) {
  $.ajax({
    method: 'GET',
    url: `/api/workouts/${id}`
  })
};

export const createWorkout = workout => (
  $.ajax({
    method: 'POST',
    url: '/api/workouts',
    data: {workout}
  })
);

export const deleteWorkout = function(id, success, error) {
  $.ajax({
    method: 'DELETE',
    url: `/api/workouts/${id}`,
    success,
    error
  });
};
