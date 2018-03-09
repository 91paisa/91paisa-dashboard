import { Dispatch } from 'redux'
import { loginAPI } from '../api/loginAPI'
import { authActions } from './actionConstants'
export interface IAuthActions {
  type: authActions
  token?: string
}
export const login = (email: string, password: string) => {
  return (dispatch: Dispatch<IAuthActions>) => {
    loginAPI(email, password).then(token =>
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
