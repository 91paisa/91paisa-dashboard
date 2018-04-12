import * as React from 'react'
import { List, WindowScroller } from 'react-virtualized'
import styled from 'styled-components'
import { ITransaction } from '../../../api/transaction-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import Space, { SpaceEnum } from '../../../components/Space'
import { lightGrey, white } from '../../../styles/colors'
import { isPhoneOrTable } from '../../../styles/screenSize'
import CustomerTransactionItem from './CustomerTransactionItem'

interface IProps {
  transactions: ITransaction[]
}

class CustomerTransactionList extends React.Component<IProps> {
  public render() {
    const { transactions } = this.props
    return (
      <Container>
        <Card>
          <CardTitle>Transactions</CardTitle>
          <Space height={SpaceEnum.m} />
          <WindowScroller>
            {({ height, width, isScrolling, onChildScroll, scrollTop }) => (
              <List
                autoHeight={true}
                height={height}
                autoWidth={true}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={transactions.length}
                rowHeight={isPhoneOrTable() ? 70 : 88}
                rowRenderer={this.rowRenderer}
                width={width}
              />
            )}
          </WindowScroller>
        </Card>
      </Container>
    )
  }

  private rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style,
  }: any) => (
    <BackgroundContainer key={key} style={style} index={index}>
      <CustomerTransactionItem transaction={this.props.transactions[index]} />
    </BackgroundContainer>
  )
}

const BackgroundContainer: any = styled.div`
  background: ${(props: any) => (props.index % 2 === 0 ? lightGrey : white)};
  border-bottom: ${lightGrey};
`

const Container = styled.div`
  margin-bottom: 10rem;
`
export default CustomerTransactionList
