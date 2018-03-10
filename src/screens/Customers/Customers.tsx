import { Component, default as React } from 'react'
import { ICustomer } from '../../api/customer-api'
interface IProps {
  customers: ICustomer[]
}
class Customers extends Component<IProps> {
  public render() {
    return (
      <div>
        <pre>
          <code>{JSON.stringify(this.props.customers, null, 4)}</code>
        </pre>
      </div>
    )
  }
}

export default Customers
