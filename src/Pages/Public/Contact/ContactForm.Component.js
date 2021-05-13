import React from 'react'
import { useStoreState } from 'easy-peasy'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import InputField from 'Components/Form-control/InputField'
import { Button, Col, Row } from 'Components/UI-Library'
import schema from './Contact.Yup'
import './ContactForm.Style.less'

const ContactForm = () => {
  const user = useStoreState((state) => state.auth.user)

  const defaultValues = {
    defaultValues: {
      firstName: user ? user.firstName : '',
      lastName: user ? user.lastName : '',
      email: user ? user.email : '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const handleSubmit = (value) => {
    console.log(`value`, value)
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="contact-form-wrapper">
      <Row gutter={[48, 6]}>
        <Col xs={24} md={12} lg={10}>
          <InputField
            label="First Name"
            name="firstName"
            form={form}
            isRequired
          />
        </Col>
        <Col xs={24} md={12} lg={10}>
          <InputField
            label="Last Name"
            name="lastName"
            form={form}
            isRequired
          />
        </Col>
        <Col xs={24} md={12} lg={10}>
          <InputField label="Email" name="email" form={form} isRequired />
        </Col>
        <Col xs={24} md={12} lg={10}>
          <InputField label="Subject" name="subject" form={form} />
        </Col>
        <Col xs={24} md={24} lg={20}>
          <InputField
            label="Leave us a message..."
            name="message"
            form={form}
            textArea
          />
        </Col>
        <Col xs={12} md={10} lg={10}>
          <Button block htmlType="submit" className="btn-submit">Submit</Button>
        </Col>
      </Row>
    </form>
  )
}

export default ContactForm
