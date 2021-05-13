import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter your email.')
    .email('Please enter a valid email address.'),
  password: yup.string().required('Please enter your password.'),
})

export default schema
