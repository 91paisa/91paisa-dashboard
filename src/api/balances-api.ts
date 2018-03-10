export interface IBalance {
  amount: number
  timestamp: string
}
export const getEkoBalanceApi = (): IBalance => ({
  amount: 90000,
  timestamp: '7:12 pm 29 Mar 2018',
})

export const getNodalBalanceApi = (): IBalance => ({
  amount: 39000,
  timestamp: '7:14 pm 29 Mar 2018',
})
