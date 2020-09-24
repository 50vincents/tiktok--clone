import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok-vt35.herokuapp.com/'
});

export default instance;