import * as types from './action-types';

export const addBlock = (payload) => {
  return {
    type: types.ADD_BLOCK,
    payload
  };
};
