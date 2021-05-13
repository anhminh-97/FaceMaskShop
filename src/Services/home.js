import { API } from "Constants/CommonConstants";
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(API.PRODUCT);
  return response;
};

export const getProductId = async (id) => {
  const response = await axios.get(`${API.PRODUCT}/${id}`);
  return response;
};


