import axios from 'axios'
import { AuthPath } from './apiConstants'

export const loginAPI = (
  email: string,
  password: string,
): Promise<string | undefined> => {
  const data = new FormData()
  data.append('email', email)
  data.append('password', password)
  return axios
    .post(AuthPath.login, data)
    .then(res => res.data.data)
    .catch(() => undefined)
}
