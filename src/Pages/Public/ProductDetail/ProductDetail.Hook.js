import { useStoreActions } from 'easy-peasy'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const useProductDetail = () => {
  const { id } = useParams()
  // Store
  const getProductId = useStoreActions(
    (actions) => actions.products.getProductId
  )
  const getProductShopId = useStoreActions(
    (actions) => actions.products.getProductShopId
  )

  // Hook
  useEffect(() => {
    getProductId(id)
  }, [getProductId, id])
  useEffect(() => {
    getProductShopId(id)
  }, [getProductShopId, id])
  return {}
}

export default useProductDetail
