import { authActions } from '../actions/actionConstants'
import { IAuthActions } from '../actions/auth-actions'

export default function(state = {}, action: IAuthActions) {
  if (action.type === authActions.login) {
    const token = action.token
    if (token) {
      localStorage.setItem('token', token)
      return { token }
    }
  }
  if (action.type === authActions.logout) {
    localStorage.removeItem('token')
    return (state = {})
  }
  return state
}
