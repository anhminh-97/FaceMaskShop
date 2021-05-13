import { Input } from 'Components/UI-Library'
import React from 'react'
import { Controller } from 'react-hook-form'
import './index.less'

const { TextArea } = Input
const { Password } = Input

const InputField = ({ name, label, form, isRequired, type, textArea }) => {
  const { errors , } = form
  const hasError = errors[name]

  return (
    <div className="input-field-wrapper">
      <div className="label">
        {label}
        {isRequired && <span className="star-required">*</span>}
      </div>
      <Controller
        name={name}
        control={form.control}
        as={
          (type === 'password' && Password) ||
          (textArea ? TextArea : Input)
        }
        type={type}
      />
      {hasError && <div className="error-message">{errors[name]?.message}</div>}
    </div>
  )
}

export default InputField
