import {TYPES} from '../../../const/types';

const INITIAL_STATE = {
  user: INITIAL_USER,
  is_loggedin: false,
};

export const INITIAL_USER = {
  title: '',
  id: 1,
  address: '',
  phone: '00',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.LOGIN.LOGIN: {
      return {
        ...state,
        is_loggedin: true,
        user: {...action.payload},
      };
    }

    case TYPES.LOGIN.LOGOUT: {
      return {
        ...state,
        is_loggedin: false,
        user: INITIAL_USER,
      };
    }

    default:
      return state;
  }
};
