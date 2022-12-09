import AsyncStorage from '@react-native-community/async-storage';
import _axios from '../../../config/network';
import { STORE_ITEMS } from '../../../const/AsyncStorageItems';
import { PATHS } from '../../../const/paths';
import { TYPES } from '../../../const/types';
import { navigate } from '../../../services/NavigationService';

export const login = user => {
  return {
    type: TYPES.LOGIN.LOGIN,
    payload: user,
  };
};

export const logout = _ => {
  return {
    type: TYPES.LOGIN.LOGOUT,
  };
};
export const loginFromAPI = _ => dispatch => {
  _axios.get('employees')
    .then(res => {
      AsyncStorage.setItem(STORE_ITEMS.USER, res.data[0].toString())
      dispatch(login(res.data[0]))
    })
    .catch(e => console.log(e, "eroeroer"))
}

export const syncUserFromStorage = _ => dispatch => {
  AsyncStorage.getItem(STORE_ITEMS.USER).then(user => {
    if (user) {
      dispatch(login(JSON.parse(user)));
      navigate(PATHS.AppStack);
    } else
      setTimeout(() => {
        navigate(PATHS.AuthStack);
      }, 2000);
  });
};
