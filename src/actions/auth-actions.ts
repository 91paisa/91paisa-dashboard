import { Dispatch } from 'redux'
import { loginApi } from '../api/login-api'
import { authActions } from './constants-actions'

export enum authStatus {
  failure,
  success,
  loading,
}

export interface IAuthActions {
  type: authActions
  token?: string
  status?: authStatus
}

export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<IAuthActions>) => {
    loginApi(email, password).then(res =>
      dispatch({
        status: res.status,
        token: res.token,
        type: authActions.login,
      }),
    )
  }
}

export const loading = () => ({
  status: authStatus.loading,
  token: '',
  type: authActions.login,
})

export const logout = (): IAuthActions => ({
  type: authActions.logout,
})
