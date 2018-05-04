import { Component, default as React } from 'react'
import styled from 'styled-components'
import { ITransaction } from '../../api/transaction-api'
import Card from '../../components/Card'
import Space, { SpaceEnum } from '../../components/Space'
import SettlementContainer from './Settlement/SettlementContainer'
import SplitList from './SplitList'
import TransactionActionButton from './TransactionActionButton'
import TransactionSummary from './TransactionSummary'

interface IProps {
  transaction: ITransaction | undefined
  transactionIndex: number
}

class TransactionDetail extends Component<IProps> {
  public render() {
    const { transaction } = this.props
    if (!transaction) {
      return <div />
    }
    return (
      <OuterContainer>
        <InnerContainer>
          <Card>
            <TransactionSummary transaction={transaction} />
            <TransactionActionButton transaction={transaction} />
          </Card>
          {transaction.settlement && (
            <SettlementContainer settlement={transaction.settlement} />
          )}
          <SplitList splits={transaction.transactionDetails} />
          <>
            <Space height={SpaceEnum.xxxl} />
            <Space height={SpaceEnum.xxxl} />
          </>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

const InnerContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`

export default TransactionDetail
