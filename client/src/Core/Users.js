import { CoreAxios } from './Core'

const ENDPOINT = '/user'
const LOGIN = '/login'
const REGISTER = '/register'

export const login = async values => {
  return await CoreAxios.post(LOGIN, {
    email: values.email,
    password: values.password
  })
}

export const register = async values => {
  return await CoreAxios.post(REGISTER, {
    email: values.email,
    name: values.name,
    password: values.password
  })
}
