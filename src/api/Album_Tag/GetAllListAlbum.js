// src/api/userApi.js
import api from "../apiInstance";

// Example API function to fetch user data
export const getAllListAlbum = async () => {
  try {
    const response = await api.get("/album/listAlbum");
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    throw error;
  }
};
