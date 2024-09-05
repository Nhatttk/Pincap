// src/api/userApi.js
import api from '../apiInstance';

// Example API function to fetch user data
export const getAllNotification = async () => {
  try {
    const response = await api.get("/notification/getAll");
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching all notification:', error);
    throw error;
  }
};
