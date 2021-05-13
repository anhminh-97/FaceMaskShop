import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'

import { Button, Col, Modal, Radio, Row, Select } from 'Components/UI-Library'
import InputField from 'Components/Form-control'
import ProductOrder from './ProductOrder.Component'
import './ModalOrder.Style.less'

const { Option } = Select

const ModalOrder = ({ visible, setVisible, data }) => {
  // state
  const [variant, setVariant] = useState({
    date: format(data.create_at, 'yyyy-MM-dd'),
    status: data.status,
    payment: data.payment,
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
      userName: data.reciver
        ? `${data.reciver.firstName}${data.reciver.lastName}`
        : '',
      phoneNumber: data.reciver ? data.reciver.phoneNumber : '',
      email: data.reciver ? data.reciver.email : '',
      address: data.reciver ? data.reciver.address : '',
      message: data.reciver ? data.reciver.message : '',
    },
    resolver: yupResolver(schema),
  }

  const handleOk = (value) => {
    console.log('value :>> ', value)
  }

  const form = useForm(defaultValues)
  const handleCancel = () => {
    setVisible(false)
  }
  const handleSelect = (value) => {
    setVariant((prev) => ({ ...prev, status: value }))
  }
  const onHandleMethod = (e) => {
    setVariant((prev) => ({ ...prev, payment: e.target.value }))
  }
  const handleChangeDate = (e) => {
    setVariant((prev) => ({ ...prev, date: e.target.value }))
  }

  return (
    <Modal
      title="Edit Order"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      className="modal-order-wrapper"
    >
      <h2>Code order: #{data.id}</h2>
      <div className="mb-sm">
        <span className="label">Create at:&emsp;</span>
        <input
          type="date"
          onChange={handleChangeDate}
          value={variant.date}
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
      <InputField label="Customer" name="userName" isRequired form={form} />
      <InputField label="Tel" name="phoneNumber" isRequired form={form} />
      <InputField label="Email" name="email" isRequired form={form} />
      <InputField label="Address" name="address" isRequired form={form} />
      <InputField label="Message" name="message" form={form} textArea />
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
      <ProductOrder data={data} />
      <Row justify="end">
        <Col>
          <Button
            size="large"
            type="primary"
            onClick={form.handleSubmit(handleOk)}
          >
            Update
          </Button>
        </Col>
      </Row>
    </Modal>
  )
}

export default ModalOrder
