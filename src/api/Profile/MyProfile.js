// src/api/userApi.js
import { useSelector } from 'react-redux';
import api from '../apiInstance';

// Example API function to fetch user data
export const getMyProfile = async (token) => {
  try {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const response = await api.get("/user/my-profile");
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching user data222:', error);
    throw error;
  }
};
