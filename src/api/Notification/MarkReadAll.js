
// src/api/userApi.js
import api from '../apiInstance';

// Example API function to fetch user data
export const MarkReadAll = async () => {
  try {
    const response = await api.post('/notification/markReadAll/');
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching markReadById:', error);
    throw error;
  }
};
