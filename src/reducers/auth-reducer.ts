import { IAuthActions } from '../actions/auth-actions'
import { auth } from '../actions/constants'

export default function(state = {}, action: IAuthActions) {
  if (action.type === auth.login) {
    const token = action.token
    if (token) {
      localStorage.setItem('token', token)
      return { token }
    }
  }
  if (action.type === auth.logout) {
    localStorage.removeItem('token')
    return (state = {})
  }
  return state
}
