import axios from 'axios'
import { API } from 'Constants/CommonConstants'

export const postOrder = async (data) => {
  const response = await axios.post(API.ORDER, data)
  return response
}

export const getOrder = async (page) => {
  const response = await axios.get(`${API.ORDER}?_page=${page}&_limit=8`)
  return response
}
export const getOrderId = async (id) => {
  const response = await axios.get(`${API.ORDER}/${id}`);
  return response;
};
export const removeOrder = async (id) => {
  const response = await axios.delete(`${API.ORDER}/${id}`)
  return response
}
export const updateOrder = async (id, data) => {
  const response = await axios.patch(`${API.ORDER}/${id}`, data)
  return response
}
