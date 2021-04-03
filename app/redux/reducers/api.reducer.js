import {REQUEST_SEND} from '../actiontype/api.actiontype';
const auth = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_SEND:
    return {loading: true};
  default:
    return state;
  }
};

export default auth;