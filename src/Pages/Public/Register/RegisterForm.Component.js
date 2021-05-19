import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import InputField from 'Components/Form-control/InputField'
import { Button, Checkbox, Col, message, Row } from 'Components/UI-Library'
import { ROUTER } from 'Constants/CommonConstants'
import { useStoreActions } from 'easy-peasy'
import { useForm } from 'react-hook-form'
import { Link, useHistory, useLocation } from 'react-router-dom'
import './index.less'
import useRegister from './Register.Hook'
import schema from './Register.Yup'

const RegisterForm = () => {
  useRegister()
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : '/'
  const history = useHistory()
  const saveRegister = useStoreActions((action) => action.auth.saveRegister)

  const defaultValues = {
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: null,
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const handleSubmit = (value) => {
    saveRegister({ value, fnCallback })
  }
  const fnCallback = (success) => {
    if (success) {
      message.success('Account registration is successful')
      history.push(
        redirect ? `${ROUTER.Login}?redirect=${redirect}` : ROUTER.Login
      )
    } else {
      message.error('Account registration failed')
    }
  }
  return (
    <Row justify="center">
      <Col xs={24} sm={16} lg={14} xl={8} className="form-wrapper">
        <div className="sign-up">Sign Up</div>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <InputField
            name="firstName"
            label="First Name"
            form={form}
            isRequired
          />
          <InputField
            name="lastName"
            label="Last Name"
            form={form}
            isRequired
          />
          <InputField
            name="phoneNumber"
            label="Phone Number"
            form={form}
            isRequired
            type="number"
          />
          <InputField
            name="email"
            label="Email"
            type="email"
            form={form}
            isRequired
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            form={form}
            isRequired
          />
          <InputField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            form={form}
            isRequired
          />
          <Checkbox>I have read the agreement</Checkbox>
          <Button
            block
            type="primary"
            htmlType="submit"
            className="btn-sign-up"
          >
            Sign Up
          </Button>
          Do you have an account?{' '}
          <Link
            to={
              redirect ? `${ROUTER.Login}?redirect=${redirect}` : ROUTER.Login
            }
          >
            Login now
          </Link>
        </form>
      </Col>
    </Row>
  )
}

export default RegisterForm
