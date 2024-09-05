// src/api/userApi.js
import api from "../apiInstance";

// Example API function to fetch user data
export const addMedia = async (data) => {
  try {
    const response = await api.post("/medias/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error add media data:", error);
    throw error;
  }
};
