import React, { useState } from 'react'
import {
  Button,
  Col,
  Collapse,
  InputNumber,
  message,
  Modal,
  Radio,
  Row,
} from 'Components/UI-Library'
import {
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
} from 'Components/UI-Library/Icons'
import { useHistory, useLocation } from 'react-router-dom'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { ROUTER } from 'Constants/CommonConstants'
import isEmpty from 'lodash/isEmpty'

const { Panel } = Collapse

const ProductContent = () => {
  const history = useHistory()
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'
  // Store
  const addCart = useStoreActions((actions) => actions.cart.addCart)
  const productDetail = useStoreState((state) => state.products.productDetail)
  const user = useStoreState((state) => state.auth.user)

  // state
  const [variant, setVariant] = useState({
    color: null,
    quantity: 1,
  })
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onHandleColor = (e) => {
    setVariant((prev) => ({ ...prev, color: e.target.value }))
  }

  const onHandleQuantity = (value) => {
    setVariant((prev) => ({ ...prev, quantity: value }))
  }
  const onHandleAdd = (payload) => {
    if (!variant.color) {
      message.error('Please choose color of product')
    } else if (isEmpty(user)) {
      setVisible(true)
    } else {
      const data = { ...payload, ...variant }
      addCart({ ...user, cart: [data] })
    }
  }
  const onHandleBuyNow = (payload) => {
    if (!variant.color) {
      message.error('Please choose color of product')
    } else {
      addCart({ ...payload, ...variant })
      history.push(ROUTER.Checkout)
    }
  }

  const handleOk = () => {
    setConfirmLoading(true)
    history.push(
      redirect
        ? `${ROUTER.Login}?redirect=${redirect}product-detail/${productDetail.id}`
        : ROUTER.Login
    )
  }
  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <div className="product-name">{productDetail.name}</div>
      <div className="sku">SKU: 00{productDetail.id}</div>
      <div className="product-price">${productDetail.price}</div>
      <div className="product-color mb-lg">
        <p>
          <strong>Color:</strong> {variant.color}
        </p>
        <Radio.Group onChange={onHandleColor} nam="color" value={variant.color}>
          <Radio value={productDetail.color && productDetail.color[0]}>
            {productDetail.color && productDetail.color[0]}
          </Radio>
          <Radio value={productDetail.color && productDetail.color[1]}>
            {productDetail.color && productDetail.color[1]}
          </Radio>
        </Radio.Group>
      </div>
      <div className="quantity mb-lg">
        <p>
          <strong>Quantity</strong>
        </p>
        <InputNumber
          min={1}
          value={variant.quantity}
          name="quantity"
          onChange={onHandleQuantity}
        />
      </div>
      <div className="mb-sm">
        <Row gutter={[8, 8]}>
          <Col span={20}>
            <Button block onClick={() => onHandleAdd(productDetail)}>
              Add to cart
            </Button>
          </Col>
          <Col span={4}>
            <Button block>
              <HeartOutlined />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="mb-sm">
        <Button
          block
          type="primary"
          onClick={() => onHandleBuyNow(productDetail)}
        >
          Buy Now
        </Button>
      </div>
      <Modal
        title="LOGIN"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        footer={[
          <Button
            style={{ padding: '5px 20px', height: 'auto' }}
            key="cancel"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            style={{ padding: '5px 20px', height: 'auto' }}
            key="login"
            type="primary"
            onClick={handleOk}
          >
            Login
          </Button>,
        ]}
      >
        Please login before adding to cart
      </Modal>
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
      >
        <Panel header="Product Info" key="1">
          <p>
            I’m a Return and Refund policy. I’m a great place to let your
            customers know what to do in case they are dissatisfied with their
            purchase. Having a straightforward refund or exchange policy is a
            great way to build trust and reassure your customers that they can
            buy with confidence.
          </p>
        </Panel>
        <Panel header="Return & Refund Policy" key="2">
          <p>
            I’m a Return and Refund policy. I’m a great place to let your
            customers know what to do in case they are dissatisfied with their
            purchase. Having a straightforward refund or exchange policy is a
            great way to build trust and reassure your customers that they can
            buy with confidence.
          </p>
        </Panel>
        <Panel header="Shipping Info" key="3">
          <p>
            {`  I'm a shipping policy. I'm a great place to add more  information about your shipping methods, packaging and cost.    Providing straightforward information about your shipping   policy is a great way to build trust and reassure your  customers that they can buy from you with confidence.`}
          </p>
        </Panel>
      </Collapse>
    </>
  )
}

export default ProductContent
