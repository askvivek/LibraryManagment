import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {initStore} from './redux/store';
import App from './App.container';

const store = initStore();
class LibraryManagment extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>);
  }
}
export default LibraryManagment;
