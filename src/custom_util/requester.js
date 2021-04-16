import axios from 'axios';

const config = { withCredentials: true };
const BACKEND_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://192.168.15.227:8000';
const API_URL_PREFIX = '/api/v1';

/**
 * send a request to backend by using axios
 * @param {object} options options for request, including 'method, url, data'
 * @returns {Promise} response
 */
async function _doRequest(method = 'get', apiUrl = '', data = null) {
  try {
    const url = BACKEND_URL + API_URL_PREFIX + apiUrl;
    const response = await axios({ method, url, data, config });

    return response.data;
  } catch (e) {
    console.error(e);
    return e?.response?.data ?? null;
  }
}

// ----------member CRUD------------
const member = {
  create: (data) => _doRequest('post', '/member/createMember', data),
  get: (id) => _doRequest('get', `/member/readMember/${id}`),
  update: (data) => _doRequest('put', '/member/updateMember', data),
  delete: (data) => _doRequest('delete', '/member/deleteMember', data),
};

// ---------eating-history CRUD------------
const eatinghistory = {
  create: (data) => _doRequest('post', '/eatinghistory/add', data),
  get: (userId) => _doRequest('get', `/eatinghistory/read/${userId}`),
  update: (data) => _doRequest('put', '/eatinghistory/update', data),
  delete: (data) => _doRequest('delete', '/eatinghistory/delete', data),
};

// ---------food CRUD------------
const food = {
  create: (data) => _doRequest('post', '/foodInfo', data),
  get: () => _doRequest('get', '/foodInfo'),
  update: (data) => _doRequest('put', '/foodInfo', data),
  delete: (data) => _doRequest('delete', '/foodInfo', data),
};

export default { member, eatinghistory, food };
