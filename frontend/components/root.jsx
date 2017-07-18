import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './landing'

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <h1>RunAWay</h1>
        <Route exact path="/" component={Landing} />
      </div>
    </HashRouter>
  </Provider>
)

export default Root;
