import {REQUEST_FAILURE, REQUEST_SEND, REQUEST_SUCCESS} from '../actiontype/api.actiontype';

function requestSend () {
  return {type: REQUEST_SEND}; 
}
function requestSuccess () {
  return {type: REQUEST_SUCCESS}; 
}
function requestFailure () {
  return {type: REQUEST_FAILURE}; 
}

export {requestSend, requestSuccess, requestFailure};
