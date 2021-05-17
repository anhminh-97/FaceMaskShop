import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'Components/Form-control'
import {
  Button,
  Col,
  message,
  Modal,
  Radio,
  Row,
  Select,
} from 'Components/UI-Library'
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
} from 'Components/UI-Library/Icons'
import { ROUTER } from 'Constants/CommonConstants'
import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import './OrderDetail.Style.less'
import schema from './OrderDetail.Yup'
import ProductOrder from './ProductOrder.Component'

const { Option } = Select
const { confirm } = Modal

const OrderDetailForm = ({ orderDetail }) => {
  const history = useHistory()
  const deleteOrder = useStoreActions(
    (actions) => actions.orderAdmin.deleteOrder
  )
  const editOrder = useStoreActions((actions) => actions.orderAdmin.editOrder)

  // state
  const [variant, setVariant] = useState({
    status: orderDetail.status,
    payment: orderDetail.payment,
    // date: format(orderDetail.create_at, 'yyyy-MM-dd'),
    create_at: orderDetail.create_at,
  })
  const defaultValues = {
    defaultValues: {
      firstName: orderDetail.reciver ? orderDetail.reciver.firstName : '',
      lastName: orderDetail.reciver ? orderDetail.reciver.lastName : '',
      phoneNumber: orderDetail.reciver ? orderDetail.reciver.phoneNumber : '',
      email: orderDetail.reciver ? orderDetail.reciver.email : '',
      address: orderDetail.reciver ? orderDetail.reciver.address : '',
      message: orderDetail.reciver ? orderDetail.reciver.message : '',
    },
    resolver: yupResolver(schema),
  }

  const handleSubmit = (value) => {
    const data = { id: orderDetail.id, ...variant, reciver: value }
    console.log(`value`, value)
    editOrder({ data, fnCallback })
  }
  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure delete this order?',
      icon: <ExclamationCircleOutlined />,
      content: 'The order will not be restored if you delete it !',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteOrder({ id, fnCallback })
      },
    })
  }
  const fnCallback = (success) => {
    if (success) {
      message.success('Successfully')
      history.push(ROUTER.AllOrders)
    } else {
      message.error('Failed')
    }
  }

  const form = useForm(defaultValues)
  const handleSelect = (value) => {
    setVariant((prev) => ({ ...prev, status: value }))
  }
  const onHandleMethod = (e) => {
    setVariant((prev) => ({ ...prev, payment: e.target.value }))
  }
  const handleChangeDate = (e) => {
    setVariant((prev) => ({ ...prev, create_at: e.target.value }))
  }
  return (
    <>
      <Row justify="end">
        <Col>
          <Button
            type="link"
            onClick={() => showDeleteConfirm(orderDetail.id)}
            className="btn-delete"
          >
            <DeleteOutlined /> Delete Order
          </Button>
        </Col>
      </Row>
      <Row gutter={48}>
        <Col span={14}>
          <h2>Code order: #{orderDetail.id}</h2>
          <div className="mb-sm">
            <span className="label">Create at:&emsp;</span>
            <input
              type="date"
              onChange={handleChangeDate}
              value={variant.create_at}
              name="create_at"
            />
          </div>
          <div className="mb-sm">
            <span className="label">Status:&emsp;</span>
            <Select
              style={{ width: 120 }}
              onChange={handleSelect}
              value={variant.status}
            >
              <Option value="processing">Processing</Option>
              <Option value="done">Done</Option>
            </Select>
          </div>
          <h2>Shipment Details</h2>
          <Row gutter={[40, 12]}>
            <Col span={12}>
              <InputField
                label="First Name"
                name="firstName"
                isRequired
                form={form}
              />
            </Col>
            <Col span={12}>
              <InputField
                label="Last Name"
                name="lastName"
                isRequired
                form={form}
              />
            </Col>
            <Col span={12}>
              <InputField
                label="Tel"
                name="phoneNumber"
                isRequired
                form={form}
              />
            </Col>
            <Col span={12}>
              <InputField label="Email" name="email" isRequired form={form} />
            </Col>
            <Col span={12}>
              <InputField
                label="Address"
                name="address"
                isRequired
                textArea
                form={form}
              />
            </Col>
            <Col span={12}>
              <InputField label="Message" name="message" form={form} textArea />
            </Col>
          </Row>
        </Col>
        <Col span={10}>
          <h2>Payment</h2>
          <ProductOrder data={orderDetail} />
          <Row justify="end" className="mb-sm">
            <Col>
              <Radio.Group onChange={onHandleMethod} value={variant.payment}>
                <Row gutter={[12, 12]}>
                  <Col>
                    <Radio value="momo">Payment via Momo</Radio>
                  </Col>
                  <Col>
                    <Radio value="delivery">Payment on delivery</Radio>
                  </Col>
                </Row>
              </Radio.Group>
            </Col>
          </Row>
          <Row justify="end">
            <Col>
              <Button
                size="large"
                type="primary"
                onClick={form.handleSubmit(handleSubmit)}
              >
                Update
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default OrderDetailForm
