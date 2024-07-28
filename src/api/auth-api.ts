import type { AxiosInstance } from 'axios';

export default (instance: AxiosInstance) => ({
  login(id: string, password: string) {
    return instance.post('/login', {
      userId: id,
      userPassword: password,
    });
  },
});
