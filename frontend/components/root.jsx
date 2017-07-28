import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Footer from './footer';
import Landing from './landings/landing'
import NavContainer from './nav_container';
import NewRouteContainer from './routes/new_route_container';
import NewWorkoutContainer from './workout/new_workout_container';
import RouteIndexContainer from './routes/routes_index_container';
// import RouteEditContainer from './routes/edit_route_container';
import RouteShowContainer from './routes/route_show_container';
import SignupContainer from './signup_container';
import StatsContainer from './stats/stats_container';
import WorkoutsFeedContainer from './workout/workouts_feed_container';
import WorkoutShowContainer from './workout/workout_show_container';


const redirectIfLoggedIn = (nextState, replace) => {
  const currentState = this.context.store.getState();
  const currentUser = currentState.session.currentUser;
  if (currentUser) {
    replace('/home/workouts');
  }
  // <Route exact path="/home/routes/:routeId/edit" component={RouteEditContainer}/>
  // <Route exact path="/home/routes/:routeId" component={RouteShowContainer}/> pass this in to routes index via index item, using match.params.routeid
}
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="container">
        <Route exact path="/" component={Landing} onEnter={redirectIfLoggedIn}/>
        <AuthRoute exact path="/signup" component={SignupContainer} onEnter={redirectIfLoggedIn}/>
        <Route path="/home" component={NavContainer}/>

        <Route exact path="/home/workouts" component={WorkoutsFeedContainer}/>
        <Route exact path="/home/new_workout" component={NewWorkoutContainer}/>
        <Route exact path="/home/workouts/:workoutId" component={WorkoutShowContainer}/>
        <Route path="/home/routes" component={RouteIndexContainer}/>
        <Route exact path="/home/new_route" component={NewRouteContainer}/>
        <Route exact path="/home/stats" component={StatsContainer}/>

        <Footer/>
      </div>
    </HashRouter>
  </Provider>
)

export default Root;
