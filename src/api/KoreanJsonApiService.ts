import type { AxiosInstance } from 'axios';
import koreanjsonAxios from './axios/koreanjson-axios';

class KoreanJsonApiService {
  instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  fetchUsers() {
    return this.instance.get('/users');
  }

  fetchUserById(id: number) {
    return this.instance.get(`/users/${id}`);
  }

  fetchPosts() {
    return this.instance.get('/posts');
  }

  fetchPostsByUser(userId: number) {
    const params = {
      userId,
    };
    return this.instance.get('/posts', { params });
  }
}

export default new KoreanJsonApiService(koreanjsonAxios);
