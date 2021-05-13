import { useEffect } from 'react'
import { useStoreState } from 'easy-peasy'
import isEmpty from 'lodash/isEmpty'
import { useHistory } from 'react-router-dom'

import { ROUTER } from 'Constants/CommonConstants'

const useLogin = () => {
  const history = useHistory()
  const user = useStoreState((state) => state.auth.user)

  useEffect(() => {
    if (!isEmpty(user)) {
      history.push(ROUTER.Home)
    }
  }, [history, user])
  return {}
}

export default useLogin
