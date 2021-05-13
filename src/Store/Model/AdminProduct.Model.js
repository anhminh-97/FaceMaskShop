import { action, thunk } from 'easy-peasy'
import {
  getProductAdmin,
  postProduct,
  putProduct,
  removeProduct,
} from 'Services/admin'

const adminProduct = {
  allProducts: [],
  page: 1,
  search: '',
  loading: false,

  setAllProducts: action((state, payload) => {
    state.allProducts = payload
    state.loading = false
  }),

  setLoading: action((state, payload) => {
    state.loading = payload
  }),

  getAllProduct: thunk(async (actions, payload, { getState }) => {
    actions.setLoading(true)
    const page = getState().page
    try {
      const { data } = await getProductAdmin(page)
      actions.setAllProducts(data)
    } catch (error) {
      actions.setAllProducts([])
    }
  }),

  deleteProduct: thunk(async (actions, { id, fnCallback }) => {
    actions.setLoading(true)
    try {
      await removeProduct(id)
      await actions.getAllProduct()
      if (fnCallback) {
        fnCallback(true)
      }
    } catch (error) {
      actions.setLoading(false)
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),

  updateProduct: thunk(async (actions, { product, fnCallback }) => {
    actions.setLoading(true)
    try {
      await putProduct(product.id, product)
      await actions.getAllProduct()
      if (fnCallback) {
        fnCallback(true)
      }
    } catch (error) {
      actions.setLoading(false)
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),

  addProduct: thunk(async (actions, { payload, fnCallback }) => {
    actions.setLoading(true)
    try {
      await postProduct(payload)
      if (fnCallback) {
        fnCallback(true)
      }
    } catch (error) {
      actions.setLoading(false)
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
}

export default adminProduct
