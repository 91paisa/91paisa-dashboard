import { Dispatch } from 'redux'
import { loginApi } from '../api/login-api'
import { authActions } from './constants-actions'
export interface IAuthActions {
  type: authActions
  token?: string
}
export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<IAuthActions>) => {
    loginApi(email, password).then(token =>
      dispatch({
        token,
        type: authActions.login,
      }),
    )
  }
}

export const logout = (): IAuthActions => ({
  type: authActions.logout,
})
