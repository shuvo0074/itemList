'use strict'

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import baseURL from './base_url';
import { navigate } from '../../services/NavigationService';
import { STORE_ITEMS } from '../../const/AsyncStorageItems';



const _axios = axios.create({
  baseURL: baseURL.api,
});

const getNewAccessToken = async (refreshToken) => {
  try {
    const res = await _axios.post('/auth/refreshtoken', { refreshToken });
    await AsyncStorage.setItem(STORE_ITEMS.ACCESS_TOKEN, res.accessToken);
    await AsyncStorage.setItem(STORE_ITEMS.REFRESH_TOKEN, res.refreshToken);
    return res;
  } catch (error) {
    navigate('AuthStack');
  }
}

_axios.interceptors.request.use(
  (config) =>
    AsyncStorage.getItem(STORE_ITEMS.ACCESS_TOKEN).then((token) => {
      if (token) {
        config.headers['x-access-token'] = `${token}`;
      }
      return config;
    }),
  (error) => Promise.reject(error)
);

_axios.interceptors.response.use(
  (response) => {
    // console.log('##### Fishnet #####');
    // console.log(response.data);
    // console.log('##### Fishnet #####');
    if (response.data && !(response.data.error || response.data.isError || typeof response.data === 'string')) {
      if ('body' in response.data) return response.data.body;
      return response.data;
    }
    if (typeof response.data !== 'string' && (response.data.error || response.data.isError || response.data.code)) {
      if (response.data.body) return Promise.reject(response.data.body);
      return Promise.reject(response.data);
    }
    if (typeof response.data === 'string') {
      return Promise.reject(response.data);
    }
    return response;
  },
  async (error) => {
    console.log('XXXX - AJAX ERROR - XXXX', error);
    const config = error?.config;

    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true;
      const refreshToken = await AsyncStorage.getItem(STORE_ITEMS.REFRESH_TOKEN);
      const refreshTokenResponse = await getNewAccessToken(refreshToken);

      if (refreshTokenResponse?.accessToken) {
        config.headers = {
          ...config.headers,
          'x-access-token': `${refreshTokenResponse?.accessToken}`,
        };
      }

      return _axios(config);
    } else if (error?.response?.status === 403 && config.sent) {
      await AsyncStorage.clear();
      navigate('AuthStack');
    }
    return Promise.reject(error);
  }
);

export default _axios;
