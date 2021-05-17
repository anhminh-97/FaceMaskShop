import { Col, Divider, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import React from 'react'
import { Link } from 'react-router-dom'
import './ProductOrder.Style.less'

const ProductOrder = ({ data }) => {
  return (
    <div className="product-order-wrapper">
      {data?.products?.map((item, index) => {
        return (
          <Row
            justify="space-between"
            className="product-item"
            key={index.toString()}
          >
            <Col span={12}>
              <Row>
                <Col span={10}>
                  <div className="product-image">
                    <Link to={`${ROUTER.ProductDetail}/${item.id}`}>
                      <img src={item.image[1]} alt="" />
                    </Link>
                  </div>
                </Col>
                <Col span={14}>
                  <Link to={`${ROUTER.ProductDetail}/${item.id}`}>
                    <div className="product-name">{item.name}</div>
                  </Link>
                  <div className="product-price">${item.price.toFixed(2)}</div>
                  <div className="product-color">Color: {item.color}</div>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row justify="space-between">
                <Col span={12}>x {item.quantity}</Col>
                <Col span={12}>${(item.price * item.quantity).toFixed(2)}</Col>
              </Row>
            </Col>
          </Row>
        )
      })}
      <Divider />
      <Row justify="end">
        <Col span={6}>
          <h2 style={{ margin: 0 }}>Total:</h2>
        </Col>
        <Col>
          <h2 style={{ margin: 0 }}>${data.total}</h2>
        </Col>
      </Row>
      <Divider />
    </div>
  )
}
export default ProductOrder
