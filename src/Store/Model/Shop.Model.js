import { action, thunk, thunkOn } from 'easy-peasy'
import { getShop, getSearch } from 'Services/shop'

const shop = {
  page: 1,
  loading: false,
  productShop: [],
  search: '',
  productSearch: [],
  loadingSearch: false,
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setPage: action((state, payload) => {
    state.page = payload
  }),
  setSearch: action((state, payload) => {
    state.search = payload
  }),
  setLoadingSearch: action((state, payload) => {
    state.loadingSearch = payload
  }),
  loadData: action(() => {}),

  setProductShop: action((state, payload) => {
    state.productShop = payload
    state.loading = false
  }),
  setProductSearch: action((state, payload) => {
    state.productSearch = payload
    state.setLoadingSearch = false
  }),
  getProductShop: thunk(async (actions) => {
    actions.setLoading(true)
    try {
      const { data } = await getShop({ page: 1, filter: null })
      actions.setProductShop(data)
    } catch (error) {
      actions.setProductShop([])
    }
  }),
  getProductShopV2: thunkOn(
    (actions) => [actions.setPage, actions.loadData, actions.setSearch],
    async (actions, payload, { getState }) => {
      const { page, search } = getState()
      actions.setLoading(true)
      try {
        const { data } = await getShop(page, search)
        actions.setProductShop(data)
      } catch (error) {
        actions.setProductShop([])
      }
    }
  ),
  getProductSearch: thunk(async (actions, payload) => {
    actions.setLoadingSearch(true)
    try {
      const { data } = await getSearch(payload)
      // const response = await getShop();
      // console.log('response :>> ', response);
      actions.setProductSearch(data)
    } catch (error) {
      actions.setProductSearch([])
    }
  }),
}
export default shop
