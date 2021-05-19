import axios from 'axios'
import { API } from 'Constants/CommonConstants'

export const postRegister = async (data) => {
  const response = await axios.post(API.USER, data)
  return response
}

export const updateUser = async (data, id) => {
  const response = await axios.patch(`${API.USER}/${id}`, data)
  return response
}

export const getLogin = async (data) => {
  const response = await axios.get(API.USER, {
    params: data,
  })
  return response
}

export const deleteCart = async (id) => {
  const response = await axios.delete(`${API.USER}/${id}`)
  return response
}
