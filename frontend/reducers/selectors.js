export const allWorkouts = state => (
  Object.keys(state.workouts).map(id => state.workouts[id])
);


export const selectWorkout = ({ workouts }, id) => {
   const workout = workouts[id] || {};
   return workout
};
