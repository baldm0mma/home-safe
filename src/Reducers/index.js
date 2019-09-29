import { combineReducers } from 'redux';
import { progressReducer } from './progressReducer';
import { checklistReducer } from "./checklistReducer";
import { preIncidentReducer } from "./preIncidentReducer";
import { uploadCounterReducer } from './uploadCounterReducer';

const rootReducer = combineReducers({
  uploadCounter: uploadCounterReducer,
  progress: progressReducer,
  checklist: checklistReducer,
  preIncidentQuestions: preIncidentReducer
});

export default rootReducer;
