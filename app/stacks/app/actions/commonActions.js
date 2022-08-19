import {TYPES} from '../../../const/types';

export const addProduct = item => {
  return {
    type: TYPES.HOME.ADD_PRODUCT,
    payload: item,
  };
};

export const checkValidityForInput = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });
};
