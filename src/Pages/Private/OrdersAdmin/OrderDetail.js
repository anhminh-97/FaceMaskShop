import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { useStoreActions, useStoreState } from 'easy-peasy'
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  LoadingOutlined,
} from 'Components/UI-Library/Icons'
import { useHistory, useParams } from 'react-router-dom'

import {
  Button,
  Col,
  Radio,
  Row,
  Select,
  Spin,
  Modal,
  message,
} from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import InputField from 'Components/Form-control'
import ProductOrder from './ProductOrder.Component'
import './OrderDetail.Style.less'

const { Option } = Select
const { confirm } = Modal

const OrderDetail = () => {
  const { id } = useParams()
  const history = useHistory()

  const loading = useStoreState((state) => state.orderAdmin.loading)
  const deleteOrder = useStoreActions(
    (actions) => actions.orderAdmin.deleteOrder
  )
  const editOrder = useStoreActions((actions) => actions.orderAdmin.editOrder)
  const getOrderDetail = useStoreActions(
    (action) => action.orderAdmin.getOrderDetail
  )
  useEffect(() => {
    getOrderDetail(id)
  }, [getOrderDetail, id])
  const orderDetail = useStoreState((state) => state.orderAdmin.orderDetail)
  // console.log('orderDetail :>> ', orderDetail)

  // state
  const [variant, setVariant] = useState({
    status: orderDetail.status,
    payment: orderDetail.payment,
    // date: format(orderDetail.create_at, 'yyyy-MM-dd'),
    create_at: orderDetail.create_at,
  })

  const schema = yup.object().shape({
    userName: yup.string().required('Please enter user name.'),
    phoneNumber: yup
      .number()
      .typeError('Your phone number is not valid')
      .min(10, 'Your number phone is not valid')
      .required('Please type your phone number.'),
    email: yup
      .string()
      .required('Please type your email.')
      .email('Please enter a valid email address.'),
    address: yup.string().required('Please enter a valid address.'),
    message: yup.string(),
  })
  const defaultValues = {
    defaultValues: {
      userName: orderDetail.reciver
        ? `${orderDetail.reciver.firstName} ${orderDetail.reciver.lastName}`
        : '',
      phoneNumber: orderDetail.reciver ? orderDetail.reciver.phoneNumber : '',
      email: orderDetail.reciver ? orderDetail.reciver.email : '',
      address: orderDetail.reciver ? orderDetail.reciver.address : '',
      message: orderDetail.reciver ? orderDetail.reciver.message : '',
    },
    resolver: yupResolver(schema),
  }
  const handleSubmit = (value) => {
    const data = { id: orderDetail.id, ...variant, reciver: value }
    editOrder({data, fnCallback})
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
      {loading ? (
        <Spin
          spinning={loading}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
        />
      ) : (
        <div className="order-detail-wrapper">
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
                    label="Customer"
                    name="userName"
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
                  <InputField
                    label="Email"
                    name="email"
                    isRequired
                    form={form}
                  />
                </Col>
                <Col span={12}>
                  <InputField label="Message" name="message" form={form} />
                </Col>
                <Col span={24}>
                  <InputField
                    label="Address"
                    name="address"
                    isRequired
                    textArea
                    form={form}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <h2>Payment</h2>
              <ProductOrder data={orderDetail} />
              <Row justify="end" className="mb-sm">
                <Col>
                  <Radio.Group
                    onChange={onHandleMethod}
                    value={variant.payment}
                  >
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
        </div>
      )}
    </>
  )
}

export default OrderDetail
