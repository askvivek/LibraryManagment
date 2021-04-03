import axios from 'axios';
import {createAction} from 'redux-actions';
import {GET_ALL_BOOKS} from '../actiontype/books.actiontype';
// const bookslist = require('./books.json');

const getallbooksuccess = createAction(GET_ALL_BOOKS);

export const getallbooks = () => function (dispatch) {
  // dispatch(getallbooksuccess(bookslist))
  // axios.get(bookslist)
  axios.get('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json').
    then((response) => {
      let books = response.data;
      dispatch(getallbooksuccess(books));
    }).catch(() => {
      dispatch(getallbooksuccess([]));
    });        
};
