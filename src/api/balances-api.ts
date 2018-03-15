export interface IBalance {
  amount: number
  timestamp: string
}

export const getEkoBalanceApi = (): IBalance => ({
  amount: 90000,
  timestamp: '7:00PM 12/3/18',
})

export const getNodalBalanceApi = (): IBalance => ({
  amount: 39000,
  timestamp: '7:01PM 12/3/17',
})
