import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import ImgCrop from 'antd-img-crop'
import { useForm } from 'react-hook-form'
import { useStoreActions } from 'easy-peasy'
import * as yup from 'yup'

import InputField from 'Components/Form-control/InputField'
import {
  Button,
  Checkbox,
  Col,
  message,
  Row,
  Upload,
} from 'Components/UI-Library'
import './AddProduct.Style.less'

const CheckboxGroup = Checkbox.Group
const listColor = ['Black', 'White', 'Gray', 'Red', 'Green', 'Yellow']

const AddProduct = () => {
  const [color, setColor] = useState([])
  const addProduct = useStoreActions((action) => action.adminProduct.addProduct)

  const schema = yup.object().shape({
    name: yup.string().required("Please enter product's name."),
    quantity: yup
      .number()
      .integer()
      .typeError('Quantity is not valid')
      .required("Please enter product's quantity."),
    price: yup
      .number()
      .typeError('Price is not valid')
      .required("Please enter product's price."),
    description: yup.string().required("Please enter product's description."),
  })

  const defaultValue = {
    name: '',
    quantity: 1,
    price: null,
    description: '',
  }

  const defaultValues = {
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const onHandleColor = (value) => {
    setColor(value)
  }

  const handleSubmit = (value) => {
    // saveRegister({ value, fnCallback })
    if (color.length) {
      const payload = { ...value, color: [...color] }
      addProduct({ payload, fnCallback })
    } else {
      message.error('Please select color for product!')
    }
  }
  const fnCallback = (success) => {
    if (success) {
      message.success('Add product successful')
    } else {
      message.error('Add product failed')
    }
  }

  // Upload Image
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }

  return (
    <div className="add-product-wrapper">
      <Row justify="space-between" className="headline">
        <Col>
          <h1 className="title">ADD NEW PRODUCT</h1>
        </Col>
        <Col>
          <Button type="primary" onClick={form.handleSubmit(handleSubmit)}>
            Save
          </Button>
        </Col>
      </Row>
      <Row justify="space-between" gutter={60}>
        <Col xs={24} sm={16} lg={16}>
          <InputField label="Product name" name="name" isRequired form={form} />
          <div className="color">
            <span className="label">
              Color<span className="star-required">*</span>
            </span>
            &emsp;
            <CheckboxGroup
              options={listColor}
              value={color}
              onChange={onHandleColor}
            />
          </div>
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
        </Col>
        <Col span={8}>
          <h1>Product Images</h1>
          <ImgCrop rotate>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && '+ Upload'}
            </Upload>
          </ImgCrop>
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct
