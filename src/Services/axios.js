/** @format */

import axios from 'axios';

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_DOMAIN,
});

axiosInstance.interceptors.request.use(interceptor, networkError);
function interceptor(config) {
  config.data['Client_Id'] = '';
  config.data['Domain_Id'] = '';
  return config;
}

function networkError(error) {
  return Promise.reject(error);
}

export default axiosInstance;
