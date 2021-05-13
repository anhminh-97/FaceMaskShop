import { action, thunk } from 'easy-peasy'
import { getProductId } from 'Services/home'
import { getProductShopId } from 'Services/shop'
import { getOrder } from 'Services/order'

const products = {
  loading: false,
  productDetail: {},
  statusOrder: 'process',
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setProductDetail: action((state, payload) => {
    state.productDetail = payload
    state.loading = false
  }),
  setStatusOrder: action((state, payload) => {
    state.statusOrder = payload
  }),
  getProductId: thunk(async (actions, id) => {
    actions.setLoading(true)
    try {
      const response = await getProductId(id)
      actions.setProductDetail(response.data)
    } catch (error) {
      actions.setProductDetail({})
    }
  }),
  getProductShopId: thunk(async (actions, id) => {
    actions.setLoading(true)
    try {
      const response = await getProductShopId(id)
      actions.setProductDetail(response.data)
    } catch (error) {
      actions.setProductDetail({})
    }
  }),
  getOrderStatus: thunk(async (actions, data) => {
    actions.setLoading(true)
    try {
      const response = await getOrder(data)
      // console.log('response :>> ', response);
      actions.setOrderStatus(response.data.status)
      actions.setLoading(false)
    } catch (error) {}
  }),
}
export default products
