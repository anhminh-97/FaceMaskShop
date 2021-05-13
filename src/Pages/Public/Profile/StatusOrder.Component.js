import { Badge, Steps } from 'Components/UI-Library'
import {
  CarOutlined,
  InboxOutlined,
  StarOutlined,
  WalletOutlined,
} from 'Components/UI-Library/Icons'
import { useStoreState } from 'easy-peasy'
import React from 'react'
import { Link } from 'react-router-dom'

const { Step } = Steps

const StatusOrder = () => {
  // Store
  const statusOrder = useStoreState((state) => state.products.statusOrder)

  return (
    <Steps direction="vertical">
      <Step
        status="finish"
        title="Confirmation"
        description="Wait for confirmation."
        icon={
          <>
            <WalletOutlined />
            <Badge count={5} size="small">
              <Link to="" />
            </Badge>
          </>
        }
      />
      <Step
        status={statusOrder}
        title="Pickup"
        description="Wait for pickup."
        icon={
          <>
            <InboxOutlined />
            <Badge count={1} size="small">
              <Link to="" />
            </Badge>
          </>
        }
      />
      <Step
        status="wait"
        title="Shipping"
        description="Products are shipping."
        icon={
          <>
            <CarOutlined />
            <Badge count={0} size="small">
              <Link to="" />
            </Badge>
          </>
        }
      />
      <Step
        status="wait"
        title="Reviews"
        description="Product reviews."
        icon={
          <>
            <StarOutlined />
            <Badge count={0} size="small">
              <Link to="" />
            </Badge>
          </>
        }
      />
    </Steps>
  )
}

export default StatusOrder
