import { merge } from 'lodash';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: {},
  errors: []
});

const SessionReducer = ( state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    case LOGOUT:
      return nullUser;
    // case RECEIVE_ERRORS:
    //   const errors = action.errors;
    //   return merge({}, nullUser, {
    //     errors
    //   });
    default:
      return state;
  }
};

export default SessionReducer;
