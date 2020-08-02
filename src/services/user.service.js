import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://sleepy-beach-01624.herokuapp.com/api/';

class UserService {

  getPublicContent() {
    return axios.get('https://sleepy-beach-01624.herokuapp.com/');
  }

/*
  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
*/
}

export default new UserService();