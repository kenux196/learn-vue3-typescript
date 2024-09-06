import type { AxiosInstance } from 'axios';
import jsonplaceholderAxios from './axios/jsonplaceholder-axios';

class JsonplaceHolderApiService {
  instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  fetchPosts() {
    return this.instance.get('/posts');
  }

  fetchTodos() {
    return this.instance.get('/todos');
  }

  fetchTodoById(id: number) {
    return this.instance.get(`/todos/${id}`);
  }

  fetchComments() {
    return this.instance.get('/comments');
  }
}

export default new JsonplaceHolderApiService(jsonplaceholderAxios);
