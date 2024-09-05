// src/api/userApi.js
import api from '../apiInstance';

// Example API function to fetch user data
export const createAIImage = async (data) => {
  try {
    console.log(data)
    const response = await api.post("/medias/createAI/image", data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Tạo k được:', error);
    throw error;
  }
};
