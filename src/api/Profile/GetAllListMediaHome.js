// src/api/userApi.js
import api from "../apiInstance";

// Example API function to fetch user data
export const getAllListMediaHome = async (page) => {
  try {
    const response = await api.get(`/medias?page=${page}`);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    throw error;
  }
};
