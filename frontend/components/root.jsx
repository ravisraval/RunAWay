import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './landings/landing'
import Footer from './footer';
import SignupContainer from './signup_container';
import WorkoutsFeedContainer from './workout/workouts_feed_container';
import NewWorkoutContainer from './workout/new_workout_container';
import WorkoutShowContainer from './workout/workout_show_container';
import NavContainer from './nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const redirectIfLoggedIn = (nextState, replace) => {
  const currentState = this.context.store.getState();
  const currentUser = currentState.session.currentUser;
  if (currentUser) {
    replace('/');
  }
}
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="container">
        <Route exact path="/" component={Landing} onEnter={redirectIfLoggedIn}/>
        <AuthRoute exact path="/signup" component={SignupContainer} onEnter={redirectIfLoggedIn}/>
        <Route path="/home" component={NavContainer}/>
        <Route exact path="/home/workouts" component={WorkoutsFeedContainer}/>
        <Route exact path="/home/workouts/new" component={NewWorkoutContainer}/>
        <Route path="/home/workouts/:workoutId" component={WorkoutShowContainer}/>
        <Footer/>
      </div>
    </HashRouter>
  </Provider>
)

export default Root;
