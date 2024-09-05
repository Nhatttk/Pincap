// src/api/userApi.js
import api from "../apiInstance";

// Example API function to fetch user data
export const getAllListComment = async (media_id) => {
  try {
    const response = await api.get(
      `/comments/9bda785a-ece2-4a6f-b665-8c33b73b13cb`
    );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    throw error;
  }
};
