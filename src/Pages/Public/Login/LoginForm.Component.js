import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useForm } from 'react-hook-form'

import { ROUTER } from 'Constants/CommonConstants'
import { Button, Checkbox, Col, message, Row } from 'Components/UI-Library'
import InputField from 'Components/Form-control'
import schema from './Login.Yup'
import './LoginForm.Style.less'

const LoginForm = () => {
  const history = useHistory()
  const getLogin = useStoreActions((action) => action.auth.getLogin)
  const user = useStoreState((state) => state.auth.user)

  const handleSubmit = (value) => {
    getLogin({ value, fnCallback })
  }
  const defaultValues = {
    defaultValues: {
      email: user ? user.email : '',
      password: '',
    },
    resolver: yupResolver(schema),
  }

  const form = useForm(defaultValues)

  const fnCallback = (success) => {
    if (success) {
      message.success('Logged in successfully')
      history.push(ROUTER.Home)
    } else {
      message.error('Login failed')
    }
  }
  return (
    <Col xs={24} sm={12} lg={8} className="login-form-wrapper">
      <div className="login">Log In</div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Email" form={form} isRequired />
        <InputField
          name="password"
          label="Password"
          type="password"
          form={form}
          isRequired
        />
        <Row justify="space-between">
          <Col>
            <Checkbox>Remember me</Checkbox>
          </Col>
          <Col>
            <Link to="">Forgot password</Link>
          </Col>
        </Row>
        <Button block type="primary" htmlType="submit" className="btn-login">
          Log In
        </Button>
        Do you have an account? <Link to={ROUTER.Register}>Register now</Link>
      </form>
    </Col>
  )
}

export default LoginForm
