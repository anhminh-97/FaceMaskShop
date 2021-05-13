import axios from 'axios'
import { API } from 'Constants/CommonConstants'

export const getProductAdmin = async (page) => {
  const response = await axios.get(`${API.SHOP}?_page=${page}&_limit=8`)
  return response
}

export const removeProduct = async (id) => {
  const response = await axios.delete(`${API.SHOP}/${id}`)
  return response
}

export const putProduct = async (id, data) => {
  const response = await axios.patch(`${API.SHOP}/${id}`, data)
  return response
}

export const postProduct = async (data) => {
  const response = await axios.post(API.SHOP, data)
  return response
}
