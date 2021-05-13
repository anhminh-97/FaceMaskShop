import { action, computed, thunk } from 'easy-peasy'
import _get from 'lodash/get'

import { getLogin, postRegister, updateUser } from 'Services/auth'

const auth = {
  loading: true,
  user: {},
  setLoading: action((state, payload) => {
    state.loading = payload
  }),
  defaultValues: computed((state) => {
    const firstName = _get(state, 'user.firstName', '')
    const lastName = _get(state, 'user.lastName', '')
    const email = _get(state, 'user.email', '')
    const phoneNumber = _get(state, 'user.phoneNumber', '')
    const address = _get(state, 'user.address', '')
    const message = _get(state, 'user.message', '')
    return { firstName, lastName, email, phoneNumber, address, message }
  }),

  setUser: action((state, payload) => {
    state.user = payload
    localStorage.setItem('user', JSON.stringify(payload))
    state.loading = false
  }),
  editUser: thunk(async (actions, { value, fnCallback }) => {
    try {
      await updateUser(value)
      if (fnCallback) {
        fnCallback(true)
        actions.setLoading(false)
      }
      // actions.setUser = value
    } catch (error) {
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
  saveRegister: thunk(async (actions, { value, fnCallback }) => {
    actions.setLoading(true)
    try {
      await postRegister(value)
      if (fnCallback) {
        fnCallback(true)
        actions.setLoading(false)
      }
    } catch (error) {
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
  getUser: thunk((actions) => {
    actions.setLoading(true)
    try {
      const user = localStorage.getItem('user')
      actions.setUser(JSON.parse(user))
    } catch (error) {
      actions.setUser({})
    }
  }),
  removeUser: thunk((actions) => {
    actions.setUser({})
    localStorage.clear()
  }),
  getLogin: thunk(async (actions, { value, fnCallback }) => {
    try {
      const response = await getLogin(value)
      if (response.data.length) {
        actions.setUser(response.data[0])
        if (fnCallback) {
          fnCallback(true)
        }
      } else {
        fnCallback(false)
      }
    } catch (error) {
      if (fnCallback) {
        fnCallback(false)
      }
    }
  }),
}
export default auth
