import { Dispatch } from 'redux'
import { loginAPI } from '../api/loginAPI'
import { auth } from './constants'
export interface IAuthActions {
  type: auth
  token?: string
}
export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<IAuthActions>) => {
    loginAPI(email, password).then(token =>
      dispatch({
        token,
        type: auth.login,
      }),
    )
  }
}

export const logout = (): IAuthActions => ({
  type: auth.logout,
})
