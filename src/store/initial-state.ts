export interface IReduxState {
  auth: {
    token: string | null,
  }
}
const state: IReduxState = {
  auth: {
    get token() {
      return localStorage.getItem('token')
    },
  },
}
export default state
