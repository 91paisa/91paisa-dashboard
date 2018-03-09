export interface IReduxState {
  auth: {
    token: string | null
  }
  balances: {
    eko: number
    nodal: number
  }
}
const state: IReduxState = {
  auth: {
    get token() {
      return localStorage.getItem('token')
    },
  },
  balances: {
    eko: 201921,
    nodal: 45310,
  },
}
export default state
