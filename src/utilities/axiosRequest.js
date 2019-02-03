import axios from 'axios';

const baseUrl = 'https://fast-food-fast-delivery.herokuapp.com/api/v1';

const request = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': window.localStorage.getItem('fastFoodToken')
  },
  credentials: 'omit'
});

request.interceptors.request.use(
  (config) => {
    config.headers['x-access-token'] = localStorage.getItem('fastFoodToken');
    return config;
  },
  error => Promise.reject(error)
);

export const Get = async (route) => {
  try {
    const response = await request.get(route);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Post = async (route, data) => {
  try {
    const response = await request.post(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Put = async (route, data) => {
  try {
    const response = await request.put(route, data);
    return response.data;
  } catch (error) {
    return error.response ? error.response.data : error;
  }
};

export const Delete = async (route, data) => {
  try {
    const response = await request.delete(route, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
