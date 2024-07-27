const url = 'https://jsonplaceholder.typicode.com';

function getUrl(path) {
  return url + path;
}

export default (instance) => ({
  getPosts() {
    return instance.get(getUrl('/posts'));
  },
  getTodos() {
    return instance.get(getUrl('/todos'));
  },
});
