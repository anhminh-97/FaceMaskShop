import { Button, Col, InputNumber, Row } from 'Components/UI-Library'
import { CloseOutlined } from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const ProductCart = ({ total, removeIcon }) => {
  const cart = useStoreState((state) => state.cart.cart)
  const setAddQuantity = useStoreActions((action) => action.cart.setAddQuantity)
  const removeProduct = useStoreActions(
    (action) => action.cart.removeProduct
  )

  const onChange = (value, item) => {
    setAddQuantity({ ...item, quantity: value })
  }
  const handleRemoveCart = (id) => {
    removeProduct(id)
  }

  return (
    <div className="product-cart-wrapper">
      {cart.length ? (
        cart.map((item, index) => {
          return (
            <Row
              justify="space-between"
              className="product-item"
              key={index.toString()}
            >
              <Col>
                <Row gutter={16}>
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
                    <div className="product-price">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="product-color">Color: {item.color}</div>
                    <InputNumber
                      size="small"
                      min={1}
                      value={item.quantity}
                      onChange={(value) => onChange(value, item)}
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row gutter={48}>
                  {total && (
                    <Col span={12}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Col>
                  )}
                  {removeIcon && (
                    <Col span={12}>
                      <Button
                        className="btn-remove"
                        onClick={() => handleRemoveCart(item.id)}
                      >
                        <CloseOutlined />
                      </Button>
                    </Col>
                  )}
                </Row>
              </Col>
            </Row>
          )
        })
      ) : (
        <div className="empty-cart">Cart is empty !</div>
      )}
    </div>
  )
}
ProductCart.defaultProps = {
  removeIcon: true,
  total: true,
}
export default ProductCart
