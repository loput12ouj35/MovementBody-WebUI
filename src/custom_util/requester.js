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

// ----------calorie CRUD------------
const calorie = {
  create: (data) => _doRequest('post', '/calorie/addInfo', data),
  get: (id) => _doRequest('get', `/calorie/readInfo/${id}`),
  update: (data) => _doRequest('put', '/calorie/updateInfo', data),
  delete: (data) => _doRequest('delete', '/calorie/deleteInfo', data),
};

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
  get: (id) => _doRequest('get', `/eatinghistory/read/${id}`),
  update: (data) => _doRequest('put', '/eatinghistory/update', data),
  delete: (data) => _doRequest('delete', '/eatinghistory/delete', data),
};

// ---------food CRUD------------
const food = {
  create: (data) => _doRequest('post', '/foodInfo', data),
  getList: () => _doRequest('get', '/foodInfo'),
  getListByCategory: (id) => _doRequest('get', `/foodInfo/category/${id}`),
  getByCode: (id) => _doRequest('get', `/foodInfo/code/${id}`),
  getByName: (id) => _doRequest('get', `/foodInfo/name/${id}`),
  update: (data) => _doRequest('put', '/foodInfo', data),
  delete: (data) => _doRequest('delete', '/foodInfo', data),
};

export default { calorie, member, eatinghistory, food };
