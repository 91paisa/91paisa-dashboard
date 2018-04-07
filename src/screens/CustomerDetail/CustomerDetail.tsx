import { Component, default as React, Fragment } from 'react'
import styled from 'styled-components'
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
      <Container>
        {customer && (
          <Fragment>
            <CustomerCard customer={customer} />
            <BeneficiariesListContainer
              customerPhone={customer.phone}
              customerIndex={customerIndex}
            />
            {customer.lastTransaction && <CustomerTransactionContainer />}
          </Fragment>
        )}
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

export default CustomerDetail
