import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'Components/Form-control'
import { Button, Checkbox, message, Modal } from 'Components/UI-Library'
import { useStoreActions } from 'easy-peasy'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const CheckboxGroup = Checkbox.Group
const listColor = ['Black', 'White', 'Gray', 'Red', 'Green', 'Yellow']

const ModalProduct = ({ visible, data, setVisible }) => {
  const updateProduct = useStoreActions(
    (action) => action.adminProduct.updateProduct
  )

  // Handle Edit
  const [variant, setVariant] = useState({
    color: data.color,
  })

  const onChange = (list) => {
    setVariant((prev) => ({ ...prev, color: list }))
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const schema = yup.object().shape({
    name: yup.string().required("Please enter product's name."),
    quantity: yup
      .number()
      .typeError('Quantity is not valid')
      .integer()
      .required("Please enter product's quantity."),
    price: yup
      .number()
      .typeError('Price is not valid')
      .required("Please enter product's price."),
    description: yup.string().required("Please enter product's description."),
  })

  const defaultValues = {
    defaultValues: data,
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const handleOk = (value) => {
    const product = { id: data.id, ...value, color: variant.color }
    updateProduct({ product, fnCallback })
  }

  const fnCallback = (success) => {
    if (success) {
      message.success('Update successfully')
      setVisible(false)
    } else {
      message.error('Update failed')
    }
  }

  return (
    <Modal
      title="Edit Product"
      visible={visible}
      onCancel={handleCancel}
      footer={null}
    >
      <InputField label="Product name" name="name" isRequired form={form} />
      <CheckboxGroup
        options={listColor}
        value={variant.color}
        onChange={onChange}
      />
      <InputField
        label="Quantity"
        name="quantity"
        isRequired
        form={form}
        type="number"
      />
      <InputField
        label="Price"
        name="price"
        isRequired
        form={form}
        type="number"
      />
      <InputField
        label="Description"
        name="description"
        isRequired
        form={form}
        textArea
      />
      <Button type="primary" onClick={form.handleSubmit(handleOk)}>
        Update
      </Button>
    </Modal>
  )
}

export default ModalProduct
