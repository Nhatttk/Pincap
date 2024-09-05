// src/api/userApi.js
import api from "../apiInstance";

// Example API function to fetch user data
export const addTags = async () => {
  try {
    const response = await api.post("/tag");
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    throw error;
  }
};
