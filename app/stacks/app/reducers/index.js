import {TYPES} from '../../../const/types';

const INITIAL_STATE = {
  producList: [
    {
      title: 'Matcha Tea',
      quantity: 0,
      description: '',
      category: 0,
    },
    {
      title: 'Yogurt',
      quantity: 10,
      description: '',
      category: 1,
    },
    {
      title: 'Apples',
      quantity: 4,
      description: 'Green ones only',
      category: 2,
    },
    {
      title: 'mangoes',
      quantity: 9,
      description: 'Not important',
      category: 2,
    },
  ],
};

export const PRODUCT_OBJECT = {
  title: '',
  quantity: 1,
  description: '',
  category: 0,
};

export const CATEGORY_LIST = [
  {id: 0, value: 'Cofee, Tea'},
  {id: 1, value: 'Dairy'},
  {id: 2, value: 'Fruits'},
  {id: 3, value: 'Personal care & Beauty'},
  {id: 4, value: 'Pharmacy'},
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
