import { CoreAxios } from './Core'

const ENDPOINT = '/user'
const LOGIN = '/login'

export const login = async values => {
  return await CoreAxios.post(LOGIN, {
    email: values.email,
    password: values.password
  })
}
