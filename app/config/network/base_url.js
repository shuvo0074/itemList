import ENV from '../env';

const baseURLs = {
  DEV: {
    api: 'https://dummy.restapiexample.com/api/v1/',
  },
  STAGING: {
    api: 'https://dummy.restapiexample.com/api/v1/',
  },
  PRODUCTION: {
    api: 'https://dummy.restapiexample.com/api/v1/',
  },
};

const baseURL = baseURLs[ENV];

export default baseURL;
