import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/goals`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Menyesuaikan jika goals juga langsung mereturn Array
    return Array.isArray(response.data) ? response.data[0] : response.data.data[0];
  } catch (error) {
    throw error.response;
  }
};

export const expenseService = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/expenses`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // Berdasarkan pengecekan Network, API langsung mereturn Array
    return response.data; 
  } catch (error) {
    throw error.response;
  }
};