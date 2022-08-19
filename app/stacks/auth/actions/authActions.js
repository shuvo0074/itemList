import AsyncStorage from '@react-native-community/async-storage';
import {STORE_ITEMS} from '../../../const/AsyncStorageItems';
import {PATHS} from '../../../const/paths';
import {TYPES} from '../../../const/types';

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

export const syncUserFromStorage = navigation => dispatch => {
  AsyncStorage.getItem(STORE_ITEMS.USER).then(user => {
    if (user) {
      dispatch(login(JSON.parse(user)));
      navigation.navigate(PATHS.AppStack);
    } else
      setTimeout(() => {
        navigation.navigate(PATHS.AuthStack);
      }, 2000);
  });
};
