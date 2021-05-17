import { useStoreActions, useStoreState } from 'easy-peasy'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const useOrderDetailHook = () => {
  const { id } = useParams()
  const orderDetail = useStoreState((state) => state.orderAdmin.orderDetail)
  const loadingOrderDetail = useStoreState(
    (state) => state.orderAdmin.loadingOrderDetail
  )
  const getOrderDetail = useStoreActions(
    (action) => action.orderAdmin.getOrderDetail
  )

  useEffect(() => {
    getOrderDetail(id)
  }, [getOrderDetail, id])

  return { orderDetail, loadingOrderDetail }
}

export default useOrderDetailHook
