import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter user name.'),
  lastName: yup.string().required('Please enter user name.'),
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
export default schema
