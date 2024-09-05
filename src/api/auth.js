import api from "./apiInstance";

export const login = async (data) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error login user data:", error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error login user data:", error);
    throw error;
  }
};

export const loginById = async (id) => {
  try {
    const response = await api.post(`/auth/login/${id}`, );
    return response.data;
  } catch (error) {
    // Handle errors
    console.error("Error login user data:", error);
    throw error;
  }
};

