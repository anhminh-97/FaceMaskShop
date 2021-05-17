import React from 'react'
import { Spin } from 'Components/UI-Library'
import { LoadingOutlined } from 'Components/UI-Library/Icons'
// import isEmpty from 'lodash/isEmpty'

import OrderDetailForm from './OrderDetailForm.Component'
import useOrderDetailHook from './OrderDetail.Hook'
import './OrderDetail.Style.less'

const OrderDetail = () => {
  // const { orderDetail } = useOrderDetailHook()
  const { orderDetail, loadingOrderDetail } = useOrderDetailHook()

  return (
    <>
      {loadingOrderDetail && (
        <Spin
          spinning={loadingOrderDetail}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
        />
      )}

      {!loadingOrderDetail && (
        <div className="order-detail-wrapper">
          {/* {!isEmpty(orderDetail) && ( */}
            <OrderDetailForm orderDetail={orderDetail} />
          {/* )} */}
        </div>
      )}
    </>
  )
}

export default OrderDetail
