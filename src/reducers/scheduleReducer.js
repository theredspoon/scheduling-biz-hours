import { ADD_BLOCK, DELETE_BLOCK } from '../actions/action-types';

export const schedule = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOCK:
      return action.payload;
    case DELETE_BLOCK:
      return action.payload;
    default:
      return state; 
  }
};