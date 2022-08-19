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

    case 'LOGIN': {
      return {
        ...state,
        is_loggedin: true,
        user: {...action.payload},
      };
    }

    case 'LOGOUT': {
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
