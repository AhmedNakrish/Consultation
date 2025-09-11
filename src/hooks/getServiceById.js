// services/getServiceById.js

import axiosInstance from "@/lib/axiosInstance";

export const getServiceById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/v1/services/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching service by ID:', error);
    throw error;
  }
};
