import axios, { type AxiosInstance } from 'axios';

const jsonplaceholderAxios: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

jsonplaceholderAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

jsonplaceholderAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default jsonplaceholderAxios;
