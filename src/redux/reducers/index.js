import { combineReducers } from 'redux';
import itemReducer from '@redux/reducers/itemReducer';
import moviesReducer from '@redux/reducers/moviesReducer';

export default combineReducers({
  itemReducer,
  moviesReducer,
});
