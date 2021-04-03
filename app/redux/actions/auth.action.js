// import axios from 'axios';
import {createAction} from 'redux-actions';
import {CLEAR_ALL, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT} from '../actiontype/auth.actiontype';

const userlist = [
  {username: 'admin', password: 'admin'},
  {username: 'user', password: 'user'},
  {username: 'guest', password: 'guest'},
  {username: 'admin@test.com', password: 'password'}

];
const loginrequest = createAction(LOGIN_REQUEST);
const loginsuccess = createAction(LOGIN_SUCCESS);
const loginfailure = createAction(LOGIN_FAILURE);
const logoutuser = createAction(LOG_OUT);
const clearall = createAction(CLEAR_ALL);
export const login = (userinfo = {}) => function (dispatch) {
  userinfo.loggingin = true;
  dispatch(loginrequest(userinfo));
  let user = userlist.filter((user) => user.username === userinfo.username && user.password === userinfo.password);
  if (user.length > 0) {
    userinfo.loggedin = true;
    userinfo.loggingin = false;
    dispatch(loginsuccess(userinfo));
    return;
  }
  userinfo.loggingin = false;
  userinfo.error = 'Username or password missmatch';
  dispatch(loginfailure(userinfo));
  // axios.get('https://www.google.co.in/').then((responce)=>{
  //     dispatch(loginsuccess(user))
  // }).catch((error)=>{
  //     console.log(error);
  //     dispatch(loginsuccess(user))
  //     //dispatch(loginfailure())
  // })
};
export const logout = () => function (dispatch) {
  dispatch(clearall());
  dispatch(logoutuser());
};