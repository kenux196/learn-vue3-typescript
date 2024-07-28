import authAxios from '@/api/axios/auth-axios';
import withTokenAxios from '@/api//axios/with-token-axios';
import commonAxios from '@/api//axios/common-axios';
import jsonplaceholderAxios from '@/api/axios/jsonplaceholder-axios';

import boardApi from './board-api';
import commentApi from './comment-api';
import authApi from './auth-api';
import jsonplaceholderApi from './jsonplaceholder-api';

export const $api = {
  auth: authApi(authAxios),
  board: boardApi(withTokenAxios),
  comment: commentApi(commonAxios),
  jsonplaceholder: jsonplaceholderApi(jsonplaceholderAxios),
};
