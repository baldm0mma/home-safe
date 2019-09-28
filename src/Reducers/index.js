import { combineReducers } from 'redux';
import { progressReducer } from './progressReducer';
import { checklistReducer } from "./checklistReducer";
import { preIncidentReducer } from "./preIncidentReducer";

const rootReducer = combineReducers({
  progress: progressReducer,
  checklist: checklistReducer,
  preIncidentQuestions: preIncidentReducer
});

export default rootReducer;
