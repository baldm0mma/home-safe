import { combineReducers } from 'redux';
import { progressReducer } from './progressReducer';
import { checklistReducer } from "./checklistReducer";

const rootReducer = combineReducers({
  progress: progressReducer,
  checklist: checklistReducer
});

export default rootReducer;
