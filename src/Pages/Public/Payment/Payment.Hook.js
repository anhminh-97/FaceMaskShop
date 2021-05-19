import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

import { ROUTER } from 'Constants/CommonConstants'

const usePayment = () => {
  const history = useHistory()
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const user = useStoreState((state) => state.auth.user)

  useEffect(() => {
    if (isEmpty(user)) {
      history.push(
        redirect ? `${ROUTER.Login}?redirect=${redirect}payment` : ROUTER.Login
      )
    }
  }, [redirect, history, user])
  return {}
}

export default usePayment
