import { Component, default as React } from 'react'
import styled from 'styled-components'
import { ITransaction } from '../../api/transaction-api'
import Card from '../../components/Card'
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
      <Container>
        <Card>
          <TransactionSummary transaction={transaction} />
          <TransactionActionButton transaction={transaction} />
        </Card>
        <SplitList splits={transaction.transactionDetails} />
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`

export default TransactionDetail
