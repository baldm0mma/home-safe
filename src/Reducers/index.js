import { combineReducers } from 'redux';
import { updateProgressReducer } from './updateProgressReducer';

const rootReducer = combineReducers({
  updateProgress: updateProgressReducer
});

export default rootReducer;
