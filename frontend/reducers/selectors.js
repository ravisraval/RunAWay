export const allWorkouts = state => (
  Object.keys(state.workouts).map(id => state.workouts[id])
);

export const selectWorkout = ({ workouts }, id) => {
  let selectedWorkout = {};
  workouts.entities.forEach(workout => {
    if (workout.id === parseInt(id)) {
      selectedWorkout = workout;
    }
  })
   return selectedWorkout;
};

export const allRoutes = state => (
  Object.keys(state.routes).map(id => state.routes[id])
);

export const selectRoute = ({ routes }, id) => {
  let selectedRoute = {};
  routes.entities.forEach(route => {
    if (route.id === parseInt(id)) {
      selectedRoute = route;
    }
  })
   return selectedRoute;
};
