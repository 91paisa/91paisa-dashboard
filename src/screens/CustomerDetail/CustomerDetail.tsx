import { Component, default as React, Fragment } from 'react'
import { ICustomer } from '../../api/customer-api'
import BeneficiariesListContainer from './Beneficiary/BeneficiariesListContainer'
import CustomerCard from './CustomerCard'
import CustomerTransactionContainer from './CustomerTransactionsContainer'

interface IProps {
  customer: ICustomer | undefined
  customerIndex: number
}

class CustomerDetail extends Component<IProps, {}> {
  public render() {
    const { customer, customerIndex } = this.props
    return (
      <div>
        {customer && (
          <Fragment>
            <CustomerCard customer={customer} />
            <BeneficiariesListContainer
              customerPhone={customer.phone}
              customerIndex={customerIndex}
            />
            <div
              style={{
                borderRadius: '4px',
                height: '60vh',
                padding: '0 1%',
              }}
            >
              <CustomerTransactionContainer  />
            </div>
          </Fragment>
        )}
      </div>
    )
  }
}

export default CustomerDetail
