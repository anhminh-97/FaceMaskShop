import React, { useState } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'

import InputField from 'Components/Form-control/InputField'
import ProductCart from 'Components/PageHelper/ProductCart'
import { DollarCircleOutlined } from 'Components/UI-Library/Icons'
import { Button, Col, message, Radio, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import schema from './Payment.Yup'

const PaymentForm = () => {
  const history = useHistory()
  // Store
  const subTotal = useStoreState((state) => state.cart.subTotal)
  const checkoutCart = useStoreActions((action) => action.cart.checkoutCart)
  const total = useStoreState((state) => state.cart.total)
  const defaultValuesStore = useStoreState((state) => state.auth.defaultValues)

  // State
  const [payment, setPayment] = useState(null)

  // Form
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValuesStore,
  })

  // Function
  const onHandleChange = (e) => {
    setPayment(e.target.value)
  }
  const handleSubmit = (reciver) => {
    if (payment) {
      checkoutCart({ reciver, payment, total, fnCallback })
    } else message.error('Please choose method payment')
  }

  const fnCallback = (success) => {
    if (success) {
      message.success('Order is successful')
      history.push(ROUTER.OrderSuccess)
    } else {
      message.error('Failed')
    }
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Row gutter={[{ sm: 40, xl: 60 }]}>
        <Col xs={24} md={16}>
          <div className="sub-title">Billing Information</div>
          <Row gutter={[48, 6]}>
            <Col xs={24} md={12}>
              <InputField
                label="First Name"
                name="firstName"
                form={form}
                isRequired
              />
            </Col>
            <Col xs={24} md={12}>
              <InputField
                label="Last Name"
                name="lastName"
                form={form}
                isRequired
              />
            </Col>
            <Col xs={24} md={12}>
              <InputField label="Email" name="email" form={form} isRequired />
            </Col>
            <Col xs={24} md={12}>
              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="number"
                form={form}
                isRequired
              />
            </Col>
            <Col xs={24} md={24}>
              <InputField
                label="Address"
                name="address"
                form={form}
                isRequired
              />
            </Col>
            <Col xs={24} md={24}>
              <InputField
                label="Order Notes"
                name="message"
                form={form}
                textArea
              />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <div className="sub-title">Your Order</div>
          <ProductCart total={false} removeIcon={false} />
          <Row justify="space-between">
            <Col>Subtotal</Col>
            <Col>${subTotal}</Col>
          </Row>
          <Row justify="space-between" className="shipping">
            <Col>Shipping</Col>
            <Col>$0</Col>
          </Row>
          <Row align="middle" justify="space-between" className="total">
            <Col className="sub-total">Total</Col>
            <Col className="price-total">${total}</Col>
          </Row>
          <div className="payment-methods">
            <Radio.Group onChange={onHandleChange} value={payment}>
              <Row gutter={[12, 12]}>
                <Col>
                  <Radio value="momo">Payment via Momo</Radio>
                </Col>
                <Col>
                  <Radio value="delivery">Payment on delivery</Radio>
                </Col>
              </Row>
            </Radio.Group>
          </div>

          <Button type="primary" htmlType="submit" className="btn-payment">
            <DollarCircleOutlined />
            Payment
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default PaymentForm
