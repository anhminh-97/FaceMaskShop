import { action, computed, thunk } from 'easy-peasy'
import { getOrder, getOrderId, removeOrder, updateOrder } from 'Services/order'

const orderAdmin = {
  orders: [],
  orderDetail: {},
  page: 1,
  count: computed((state) => state.orders.length),
  loading: false,

  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setOrder: action((state, payload) => {
    state.orders = payload
    state.loading = false
  }),
  setOrderDetail: action((state, payload) => {
    state.orderDetail = payload
    state.loading = false
  }),
  setPage: action((state, payload) => {
    state.page = payload
  }),
  getAllOrders: thunk(async (actions, payload, { getState }) => {
    actions.setLoading(true)
    const page = getState().page
    try {
      const { data } = await getOrder(page)
      actions.setOrder(data)
      actions.setLoading(false)
    } catch (error) {
      actions.setLoading(false)
    }
  }),
  getOrderDetail: thunk(async (actions, id) => {
    actions.setLoading(true)
    try {
      const { data } = await getOrderId(id)
      actions.setOrderDetail(data)
      actions.setLoading(false)
    } catch (error) {
      actions.setOrderDetail({})
      actions.setLoading(false)
    }
  }),
  deleteOrder: thunk(async (actions, { id, fnCallback }) => {
    actions.setLoading(true)
    try {
      await removeOrder(id)
      await actions.getAllOrders()
      if (fnCallback) {
        fnCallback(true)
      }
      actions.setLoading(false)
    } catch (error) {
      actions.setLoading(false)
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
  editOrder: thunk(async (actions, { payload, fnCallback }) => {
    actions.setLoading(true)
    try {
      await updateOrder(payload.id, payload)
      await actions.getAllOrders()
      actions.setLoading(false)
      if (fnCallback) {
        fnCallback(true)
      }
    } catch (error) {
      actions.setLoading(false)
      if (fnCallback) {
        fnCallback(true)
      }
    }
  }),
}
export default orderAdmin
