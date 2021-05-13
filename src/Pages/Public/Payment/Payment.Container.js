import { Col, Row } from 'Components/UI-Library'
import React from 'react'
import './index.less'
import usePayment from './Payment.Hook'
import PaymentForm from './PaymentForm.Component'

const Payment = () => {
  usePayment()
  return (
    <Row className="payment-wrapper">
      <Col xs={24} lg={16}>
        <PaymentForm />
      </Col>
    </Row>
  )
}

export default Payment
