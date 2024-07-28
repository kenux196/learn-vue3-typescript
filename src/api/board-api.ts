import type { AxiosInstance } from 'axios';

const url: string = 'https://jsonplaceholder.typicode.com';

function getUrl(path: string) {
  return url + path;
}

export default (instance: AxiosInstance) => ({
  getPosts() {
    return instance.get(getUrl('/posts'));
  },
  getTodos() {
    return instance.get(getUrl('/todos'));
  },
});
