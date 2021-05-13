import React, { useState } from 'react'
import { useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'

import ProductCart from 'Components/PageHelper/ProductCart'
import { Badge, Button, Col, Drawer, Row } from 'Components/UI-Library'
import {
  CloseOutlined,
  ShoppingCartOutlined,
} from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import './index.less'

const Cart = () => {
  const count = useStoreState((state) => state.cart.count)
  const subTotal = useStoreState((state) => state.cart.subTotal)
  const [visible, setVisible] = useState(false)

  const showCart = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <div className="cart-wrapper">
      <div className="shopping-cart">
        <ShoppingCartOutlined className="cart-icon" onClick={showCart} />
        <Badge className="quantity" size="small" count={count} />
      </div>
      <Drawer
        closeIcon={<CloseOutlined />}
        width={320}
        title="My Cart"
        placement="right"
        onClose={onClose}
        visible={visible}
        footer={
          <Row align="middle" gutter={[12, 12]} className="footer-cart">
            <Col span={12} className="sub-total">
              Total:
            </Col>
            <Col span={12} className="price-total">
              ${subTotal}
            </Col>
            <Col span={24}>
              <Link to={ROUTER.Checkout}>
                <Button block onClick={onClose} className="btn-view-cart">
                  View Cart
                </Button>
              </Link>
            </Col>
          </Row>
        }
      >
        <ProductCart total={false} />
      </Drawer>
    </div>
  )
}

export default Cart
