import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'

import { ROUTER } from 'Constants/CommonConstants'

const usePayment = () => {
  const history = useHistory()
  const user = useStoreState((state) => state.auth.user)

  useEffect(() => {
    if (isEmpty(user)) {
      history.push(ROUTER.Login)
    }
  }, [history, user])
  return {}
}

export default usePayment
