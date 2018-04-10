import { Component, default as React, Fragment } from 'react'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import Card from '../../components/Card'
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
            {customer.lastTransaction && (
              <Card style={{ height: '64vh' }}>
                <CustomerTransactionContainer />
              </Card>
            )}
          </Fragment>
        )}
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
`

export default CustomerDetail
