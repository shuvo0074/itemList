import {TYPES} from '../../../const/types';

const INITIAL_STATE = {
  producList: [],
};

export const PRODUCT_OBJECT = {
  title: '',
  quantity: 1,
  description: '',
  category: 0,
};

export const CATEGORY_LIST = [
  'Cofee, Tea',
  'Dairy',
  'Fruits',
  'Personal care & Beauty',
  'Pharmacy',
];

export const commonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.HOME.ADD_PRODUCT: {
      return {
        ...state,
        producList: [...state.producList, action.payload],
      };
    }

    default:
      return state;
  }
};
