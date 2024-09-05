// src/api/userApi.js
import api from '../apiInstance';

// Example API function to fetch user data
export const getAllFollow = async (relationship) => {
  try {
    const response = await api.get(`/userRelationship/getAllFollow/${relationship}`);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching user data:', error);
    throw error;
  }
};
