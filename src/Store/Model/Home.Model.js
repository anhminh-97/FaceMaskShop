import { tagItem } from 'Constants/CommonConstants'
import { action, thunk } from 'easy-peasy'
import { getProducts } from 'Services/home'

const home = {
  products: [],
  tags: tagItem,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setTags: action((state, payload) => {
    state.tags = payload
  }),
  setProducts: action((state, payload) => {
    state.products = payload
    state.loading = false
  }),
  getProduct: thunk(async (actions) => {
    actions.setLoading(true)
    try {
      const { data } = await getProducts()
      actions.setProducts(data)
    } catch (error) {
      actions.setProducts([])
    }
  }),
}

export default home
