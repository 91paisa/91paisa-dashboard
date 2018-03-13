import { Component, default as React } from 'react'
import { ICustomer } from '../../api/customer-api'
interface IProps {
  customer: ICustomer
}
class CustomerDetail extends Component<IProps, {}> {
  public render() {
    return (
      <div>
        <pre>
          <code>
            <p>{JSON.stringify(this.props.customer, null, 4)}</p>
          </code>
        </pre>
      </div>
    )
  }
}

export default CustomerDetail
