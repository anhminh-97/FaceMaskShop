import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'

const useHome = () => {
  const getProduct = useStoreActions((actions) => actions.home.getProduct)
  const loading = useStoreState((state) => state.home.loading)
  useEffect(() => {
    getProduct()
  }, [getProduct])
  return {loading}
}

export default useHome
