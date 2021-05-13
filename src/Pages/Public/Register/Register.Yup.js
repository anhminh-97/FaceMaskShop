import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup.string().required('Please type your first name.'),
  lastName: yup.string().required('Please type your last name.'),
  phoneNumber: yup
    .number()
    .typeError('Your phone number is not valid')
    .min(10, 'Your number phone is not valid')
    .required('Please type your phone number.'),
  email: yup
    .string()
    .required('Please type your email.')
    .email('Please enter a valid email address.'),
  password: yup
    .string()
    .required('Please type your password.')
    .min(6, 'Please enter at least 6 charactors.'),
  confirmPassword: yup
    .string()
    .required('Please type confirm password.')
    .oneOf([yup.ref('password')], 'Password does not match.'),
})

export default schema
