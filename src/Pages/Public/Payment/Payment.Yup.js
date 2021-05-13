import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required('Please type your first name.'),
  lastName: yup.string().required('Please type your last name.'),
  email: yup
    .string()
    .required('Please type your email.')
    .email('Please enter a valid email address.'),
  phoneNumber: yup
    .number()
    .required('Please type your phone number.')
    .typeError('Your phone number is not valid')
    .min(10, 'Your number phone is not valid'),
  address: yup.string().required('Please type your address.'),
  message: yup.string(),
})

export default schema
