import axios from 'axios'
import { API } from 'Constants/CommonConstants'

export const getShop = async (page, search) => {
  const response = await axios.get(
    `${API.SHOP}?q=${search}&_page=${page}&_limit=8`
  )
  return response
}

export const getSearch = async (payload) => {
  const response = await axios.get(`${API.SHOP}?q=${payload}`)
  return response
}

export const getProductShopId = async (id) => {
  const response = await axios.get(`${API.SHOP}/${id}`)
  return response
}
