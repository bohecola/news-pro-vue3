import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:7001';

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.err === 1) {
    return Promise.reject(res.data.data);
  }

  return res.data;
}, (err) => {
  return Promise.reject(err);
});

export default axios;