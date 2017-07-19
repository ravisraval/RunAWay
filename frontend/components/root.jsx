import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './landing/landing'
import Footer from './footer';
import SignupContainer from './signup_container';
import WorkoutsFeedContainer from './workout/workouts_feed_container';
import NavContainer from './nav_container';


// <Route path="workouts" component={workouts} />
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="container">
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignupContainer}/>
        <Route path="/api" component={NavContainer}/>
        <Route exact path="/api/workouts" component={WorkoutsFeedContainer}/>
        <Footer/>
      </div>
    </HashRouter>
  </Provider>
)

export default Root;
