import { searchActions } from './constants-actions'

export const searchCustomers = (searchText: string) => ({
  searchText,
  type: searchActions.customer,
})
