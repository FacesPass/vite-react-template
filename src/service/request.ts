import axios from 'axios';

const request = axios.create({
  baseURL: 'localhost:8080',
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    // 携带 token 发送
    if (config?.headers && localStorage?.token) {
      config.headers.Authorization = localStorage.token;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export { request };
