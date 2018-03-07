import { auth } from './constants'
export interface IAuthActions {
  type: auth
  token?: string
}
export const login = (email: string, password: string): IAuthActions => ({
  token: 'abc',
  type: auth.login,
})

export const logout = (): IAuthActions => ({
  type: auth.logout,
})
