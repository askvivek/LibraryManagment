import {createStore, compose, applyMiddleware} from 'redux';
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;
// const middlewareLogger = createLogger({
//   predicate: (getState, action) => true
// });
if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(thunk), ...enhancerList);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

module.exports = {
  initStore
};