import React from 'react';
import ReactDOM from 'react-dom';
// import { login, logout, signup } from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store';
// import { }

//test imports
import * as util from './util/workout_util'
import * as action from './actions/workout_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchWorkouts = action.fetchWorkouts;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);

    //tests

    window.dispatch = store.dispatch
    window.createWorkout = util.createWorkout

});
