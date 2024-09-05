// src/api/userApi.js
import api from "../apiInstance";

// Example API function to fetch user data
export const reactionMedia = async (media_id) => {
  try {
    const data = {
        'media_id' : media_id
    }
    const response = await api.post("/reactionMedia", data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    throw error;
  }
};
