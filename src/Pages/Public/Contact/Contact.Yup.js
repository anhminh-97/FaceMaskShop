import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required('Please type your first name.'),
  lastName: yup.string().required('Please type your last name.'),
  email: yup
    .string()
    .required('Please type your email.')
    .email('Please enter a valid email address.'),
  subject: yup.string(),
  message: yup.string(),
})
export default schema
