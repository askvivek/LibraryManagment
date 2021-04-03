import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT} from '../actiontype/auth.actiontype';
const auth = (state = {}, action) => {
  switch (action.type) {
  case LOGIN_REQUEST: {
    return action.payload;
  }
  case LOGIN_SUCCESS: {
    return action.payload;
  }
  case LOGIN_FAILURE: {
    return action.payload;
  }
  case LOG_OUT:
    return {};
  default: {
    return state;
  }
  }
};

export default auth;