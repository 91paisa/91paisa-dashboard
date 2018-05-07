import { Component, default as React } from 'react'
import styled from 'styled-components'
import { ICustomer } from '../../api/customer-api'
import Space, { SpaceEnum } from '../../components/Space'
import BeneficiariesListContainer from './Beneficiary/BeneficiariesListContainer'
import CustomerCard from './CustomerCard'
import CustomerIVRLogContainer from './log/CustomerIVRLogContainer'
import CustomerTransactionContainer from './transaction/CustomerTransactionsContainer'

interface IProps {
  customer: ICustomer | undefined
  customerIndex: number
}

class CustomerDetail extends Component<IProps, {}> {
  public render() {
    const { customer, customerIndex } = this.props
    return (
      <OuterContainer>
        <InnerContainer>
          {customer && (
            <>
              <CustomerCard customer={customer} />
              <BeneficiariesListContainer
                customerPhone={customer.phone}
                customerIndex={customerIndex}
              />
              <CustomerTransactionContainer />
              <CustomerIVRLogContainer customerPhone={customer.phone} />
            </>
          )}
        </InnerContainer>
        <>
          <Space height={SpaceEnum.xxxl} />
          <Space height={SpaceEnum.xxxl} />
        </>
      </OuterContainer>
    )
  }
}

const OuterContainer = styled.div`
  width: 100%;
  overflow: scroll;
`

const InnerContainer = styled.div`
  max-width: 88rem;
  margin: 0 auto;
`

export default CustomerDetail
