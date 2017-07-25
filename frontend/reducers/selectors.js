export const allWorkouts = state => (
  Object.keys(state.workouts).map(id => state.workouts[id])
);


export const selectWorkout = ({ workouts }, id) => {
   const workout = workouts[id] || {};
   return workout
};

export const allRoutes = state => (
  Object.keys(state.routes).map(id => state.routes[id])
);


export const selectRoute = ({ routes }, id) => {
   const route = routes[id] || {};
   return route
};
