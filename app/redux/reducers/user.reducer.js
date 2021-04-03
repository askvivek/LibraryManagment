import {GET_USER} from '../actiontype/user.actiontype';

const user = (state = {}, action) => {
  switch (action.type) {
  case GET_USER:
    return action.payload;
  default:
    return state;
  }
};

export default user;