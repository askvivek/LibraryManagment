import {GET_ALL_BOOKS, GET_BOOK_BY_ID} from '../actiontype/books.actiontype';

const books = (state = {}, action) => {
  switch (action.type) {        
  case GET_BOOK_BY_ID:
    return action.payload;
  case GET_ALL_BOOKS:
    return action.payload;
  default:
    return state;
  }
};

export default books;