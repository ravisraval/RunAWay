import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing/landing'
import Footer from './footer';

// <Route path="workouts" component={workouts} />
const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div className="container">
        <Route exact path="/" component={Landing} />
        <Footer/>
      </div>
    </HashRouter>
  </Provider>
)

export default Root;
