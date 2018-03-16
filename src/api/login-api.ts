import axios from 'axios'
import { authStatus } from '../actions/auth-actions'
import { AuthPath } from './constants-api'
interface IAuthResponse {
  token: string
  status: authStatus
}
export const loginApi = (
  email: string,
  password: string,
): Promise<IAuthResponse> => {
  const data = new FormData()
  data.append('email', email)
  data.append('password', password)
  return axios
    .post(AuthPath.login, data)
    .then(res => ({
      status: authStatus.success,
      token: res.data.data,
    }))
    .catch(() => ({
      status: authStatus.failure,
      token: '',
    }))
}
