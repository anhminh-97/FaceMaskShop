import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useForm } from 'react-hook-form'

import InputField from 'Components/Form-control'
import { Button, Col, message, Row } from 'Components/UI-Library'
import schema from './Profile.Yup'

const ProfileForm = () => {
  const user = useStoreState((state) => state.auth.user)
  const editUser = useStoreActions((actions) => actions.auth.editUser)
  const defaultValues = {
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      phoneNumber: user ? user.phoneNumber : '',
      address: '',
    },
    resolver: yupResolver(schema),
  }
  const form = useForm(defaultValues)

  const handleSubmit = (value) => {
    editUser({ value, fnCallback })
  }
  const fnCallback = (success) => {
    if (success) {
      message.success('Update successful !!!')
    } else {
      message.error('Update failed')
    }
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Row gutter={[{ lg: 48 }, { lg: 6 }]}>
        <Col xs={24} lg={12}>
          <InputField
            label="First Name"
            name="firstName"
            form={form}
            isRequired
          />
        </Col>
        <Col xs={24} lg={12}>
          <InputField
            label="Last Name"
            name="lastName"
            form={form}
            isRequired
          />
        </Col>
        <Col xs={24} lg={12}>
          <InputField label="Email" name="email" form={form} isRequired />
        </Col>
        <Col xs={24} lg={12}>
          <InputField
            label="Phone Number"
            name="phoneNumber"
            isRequired
            form={form}
          />
        </Col>
        <Col span={24}>
          <InputField label="Address" name="address" form={form} textArea />
        </Col>
        <Col md={4}>
          <Button htmlType="submit" type="primary">
            Update
          </Button>
        </Col>
      </Row>
    </form>
  )
}

export default ProfileForm
