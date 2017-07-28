import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from '../reducers/root_reducer';

const initialState = {
  workouts: {}
}

const configureStore = (preloadedState = initialState) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;
