import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { useStoreState } from 'easy-peasy'
import { ROUTER } from 'Constants/CommonConstants'

const useRegister = () => {
  const history = useHistory()
  const user = useStoreState((state) => state.auth.user)
  useEffect(() => {
    if (!isEmpty(user)) {
      history.push(ROUTER.Home)
    }
  }, [history, user])
  return {}
}

export default useRegister
