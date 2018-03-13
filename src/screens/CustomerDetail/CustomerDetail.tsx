import { Component, default as React } from 'react'
import { ICustomer } from '../../api/customer-api'
import CustomerCard from './CustomerCard'
interface IProps {
  customer: ICustomer | undefined
}
class CustomerDetail extends Component<IProps, {}> {
  public render() {
    const { customer } = this.props
    return (
      <div>
        <CustomerCard customer={customer} />
      </div>
    )
  }
}

export default CustomerDetail
