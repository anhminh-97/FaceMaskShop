import { action, computed, thunk } from 'easy-peasy'
import _get from 'lodash/get'
import _set from 'lodash/set'
import HmacSHA256 from 'crypto-js/hmac-sha256'
import CryptoJS from 'crypto-js'
import { postOrder } from 'Services/order'
import Axios from 'axios'
import { updateUser, deleteCart } from 'Services/auth'

const cart = {
  cart: [],
  loading: false,
  count: computed((state) => state.cart.length),
  subTotal: computed((state) => {
    const data = state.cart
    return data
      .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
      .toFixed(2)
  }),
  total: computed((state) => {
    return state.subTotal
  }),
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  setCart: action((state, payload) => {
    state.cart = payload
    state.loading = false
  }),
  // getCart: action((state) => {
  //   state.cart = [
  //     ...state.cart,
  //     { ...JSON.parse(localStorage.getItem('cartItem')) },
  //   ]
  //   console.log('state.cart :>> ', state.cart)
  // }),
  addCart: thunk(async (actions, payload, { getState }) => {
    const data = getState().cart
    actions.setLoading(true)
    try {
      for (let i = 0; i < data.length; i += 1) {
        if (payload.id === data[i].id && payload.color === data[i].color) {
          let count = _get(data, `[${i}].quantity`, 0)
          count += payload.quantity
          const dataAddQuantity = _set(data, `[${i}].quantity`, count)
          // getState().cart = dataAddQuantity
          actions.setCart(dataAddQuantity)
          // localStorage.setItem('cartItem', JSON.stringify(payload))
          return
        }
      }
      getState().cart = [...data, payload]
      // console.log('payload :>> ', payload);
      await updateUser(payload, payload.id)
      // localStorage.setItem('cartItem', JSON.stringify(payload))
    } catch (error) {
      actions.setCart([])
    }
  }),
  setAddQuantity: thunk(async (actions, payload, { getState }) => {
    const data = getState().cart
    for (let i = 0; i < data.length; i += 1) {
      if (payload.id === data[i].id && payload.color === data[i].color) {
        let count = _get(data, `[${i}].quantity`, 0)
        // if (state.cart[i].quantity < payload.quantity) {
        if (payload.quantity > data[i].quantity) {
          const quantity = payload.quantity - data[i].quantity
          count += quantity
        } else {
          const quantity = data[i].quantity - payload.quantity
          count -= quantity
        }
        const dataAddQuantity = _set(data, `[${i}].quantity`, count)
        actions.setCart(dataAddQuantity)
        // localStorage.setItem('cartItem', JSON.stringify(payload))
        return
      }
    }
    getState().cart = [...data, payload]
    await updateUser(payload, payload.userId)
    // localStorage.setItem('cartItem', JSON.stringify(payload))
  }),
  removeProduct: thunk(async (actions, id) => {
    await deleteCart(id)
    // state.cart = state.cart.filter((item) => item.id !== payload.id)
    // localStorage.removeItem('cartItem')
  }),
  checkoutCart: thunk(
    async (
      actions,
      { reciver, payment, total, fnCallback },
      { getState, getStoreState }
    ) => {
      const user = _get(getStoreState(), 'auth.user', {})
      const products = _get(getState(), 'cart', {})
      const data = {
        products,
        user,
        reciver,
        payment,
        total,
        status: 'Processing',
        create_at: Date.now(),
        code: Date.now(),
      }
      try {
        // actions.setLoading(true)
        if (payment === 'momo') {
          const requestId = data.create_at
          const orderId = data.code
          const totalCart = 100000
          const returnUrl = 'http://localhost:8000/'
          const secretkey = '9JHO4c3lgPjkgibhAtM8wV8tvlxPAzp0'
          const datatest = `partnerCode=MOMOAWIY20200512&accessKey=j786WfkBxCqtZzOz&requestId=${requestId}&amount=${totalCart}&orderId=MM${orderId}&orderInfo=Thanh Toán Qua Momo&returnUrl=${returnUrl}&notifyUrl=https://momo.vn&extraData=merchantName=FaceMask Payment Momo`
          const dataTest256 = HmacSHA256(datatest, secretkey).toString(
            CryptoJS.enc.Hex
          )
          const dataRequestMomo = {
            partnerCode: 'MOMOAWIY20200512',
            accessKey: 'j786WfkBxCqtZzOz',
            requestType: 'captureMoMoWallet',
            requestId: `${requestId}`,
            amount: `${totalCart}`,
            orderId: `MM${requestId}`,
            orderInfo: 'Thanh Toán Qua Momo',
            returnUrl: `${returnUrl}`,
            notifyUrl: 'https://momo.vn',
            extraData: 'merchantName=FaceMask Payment Momo',
            signature: dataTest256,
          }
          const myBodyJsonString = JSON.stringify(dataRequestMomo)
          const dataResponseMoMo = await Axios.post(
            'https://test-payment.momo.vn/gw_payment/transactionProcessor',
            myBodyJsonString
          )
          if (dataResponseMoMo.data.message === 'Success') {
            const url = _get(dataResponseMoMo, 'data.payUrl', '')
            window.open(url)
          }
        }
        await postOrder(data)
        if (fnCallback) {
          fnCallback(true)
          // actions.setLoading(false)
        }
      } catch (error) {
        console.log(error)
        fnCallback(false)
      }
    }
  ),
}

export default cart
