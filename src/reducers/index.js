import { combineReducers } from 'redux';
import quotesReducer from './quotesReducer';

export default combineReducers({
  quotes: quotesReducer,
});
