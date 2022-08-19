import {TYPES} from '../../../const/types';

export const addProduct = item => {
  return {
    type: TYPES.HOME.ADD_PRODUCT,
    payload: item,
  };
};
