import {combineReducers} from 'redux';
import api from './api.reducer';
import auth from './auth.reducer';
import user from './user.reducer';
import books from './books.reducer';
import {LOG_OUT} from '../actiontype/auth.actiontype';

const appReducer = combineReducers({
  api,
  auth,
  user,
  books
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;