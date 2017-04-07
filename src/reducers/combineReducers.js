import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 
import { schedule } from './scheduleReducer'

const rootReducer = combineReducers({
  form,
  schedule
});

export default rootReducer;
