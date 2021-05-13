import Axios from 'axios'
import { API } from 'Constants/CommonConstants'

export const postRegister = async (data) => {
  const response = await Axios.post(API.USER, data)
  return response
}

export const updateUser = async (data, id) => {
  const response = await Axios.put(`${API.USER}/${id}`, data)
  return response
}

export const getLogin = async (data) => {
  const response = await Axios.get(API.USER, {
    params: data,
  })
  return response
}
