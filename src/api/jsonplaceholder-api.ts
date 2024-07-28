import type { AxiosInstance } from 'axios';

export default (instance: AxiosInstance) => ({
  fetchPosts() {
    return instance.get('/posts');
  },
  fetchTodos() {
    return instance.get('/todos');
  },
  fetchTodoById(id: number) {
    return instance.get(`/todos/${id}`);
  },
  fetchComments() {
    return instance.get('/comments');
  },
});
