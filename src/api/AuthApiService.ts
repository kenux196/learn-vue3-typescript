import type { AxiosInstance } from 'axios';
import authAxios from './axios/auth-axios';

class AuthApiService {
  instance: AxiosInstance;

  constructor(instnace: AxiosInstance) {
    this.instance = instnace;
  }

  login(id: string, password: string) {
    return this.instance.post('/login', { username: id, password: password });
  }
}

export default new AuthApiService(authAxios);
