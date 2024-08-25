// api.js
import axios from 'axios';
import config from './config';

const API = axios.create({
  baseURL: config.api
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('loginToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;