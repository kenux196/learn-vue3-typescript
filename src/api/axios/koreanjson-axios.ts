import axios from 'axios';

const koreanjsonAxios = axios.create({
  baseURL: 'https://koreanjson.com',
});

koreanjsonAxios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

koreanjsonAxios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default koreanjsonAxios;
