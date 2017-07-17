import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>"I'm in root"</div>
    </HashRouter>
  </Provider>
)

export default Root;
