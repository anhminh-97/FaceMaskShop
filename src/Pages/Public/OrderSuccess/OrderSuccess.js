import { Button, Col, Row } from 'Components/UI-Library'
import { CheckOutlined } from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.less'

const OrderSuccess = () => {
  const history = useHistory()
  const handleGoHome = () => {
    history.push(ROUTER.Home)
  }
  return (
    <div className="order-wrapper">
      <Row justify="center">
        <Col md={24} className="image">
          <img
            src="https://thumbs.dreamstime.com/b/place-your-curbside-pickup-order-online-abstract-concept-vector-illustration-safe-grocery-pick-up-quickservice-customer-social-198853237.jpg"
            alt=""
          />
        </Col>
        <Col md={6} className="btn-go-home">
          <div className="order-success">Order Successfull <CheckOutlined /></div>
          <Button type="primary" onClick={handleGoHome}>
            Continue To Shop
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default OrderSuccess
