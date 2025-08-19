import * as yup from 'yup'


export const registerSchema = yup.object({
  email:yup.string().required('email is required').email('invalid email format'),
  password:yup.string().required('password is required'),
  confirm_password:yup.string().required('confirm password is required'),
  first_name:yup.string().required('first name is required'),
  last_name:yup.string().required('last name is required'),
  phone:yup.string().required('phone is required'),
})