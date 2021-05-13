import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

const useShopHook = () => {
  const loading = useStoreState((state) => state.shop.loading)
  const loadData = useStoreActions((actions) => actions.shop.loadData)

  useEffect(() => {
    loadData()
  }, [loadData])

  return { loading }
}

export default useShopHook
