// src/api/axiosInstance.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'http://172.21.1.140:81/api';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Optional: Set a timeout for requests
}); 

api.interceptors.request.use(
  async (config) => {
    // Lấy token từ Redux store
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Set the Bearer token in the headers
export default api;