import * as React from 'react'
import { List, WindowScroller } from 'react-virtualized'
import styled from 'styled-components'
import { ITransaction } from '../../../api/transaction-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import Space, { SpaceEnum } from '../../../components/Space'
import { remToPx } from '../../../helpers/unit-helper'
import { lightGrey, white } from '../../../styles/colors'
import { isPhoneOrTable } from '../../../styles/screenSize'
import TransactionItem from '../../Transactions/TransactionItem'
import CustomerTransactionItem from './CustomerTransactionItem'

interface IProps {
  transactions: ITransaction[]
  ludicrousMode?: boolean
}

class CustomerTransactionList extends React.Component<IProps> {
  public render() {
    const { transactions, ludicrousMode } = this.props
    return (
      <>
        <Card>
          <>
            {!ludicrousMode && <CardTitle>Transactions</CardTitle>}
            <Space height={SpaceEnum.m} />
          </>
          <WindowScroller>
            {({ height, width, isScrolling, onChildScroll, scrollTop }) => (
              <List
                autoHeight={true}
                height={this.getRowHeight() * transactions.length}
                autoWidth={true}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                overscanColumnCount={5}
                rowCount={transactions.length}
                rowHeight={this.getRowHeight()}
                rowRenderer={this.rowRenderer}
                width={width}
                scrollTop={scrollTop}
              />
            )}
          </WindowScroller>
        </Card>
      </>
    )
  }

  private getRowHeight = () => (isPhoneOrTable() ? remToPx(7) : remToPx(6))

  private rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style,
  }: any) => (
    <BackgroundContainer key={key} style={style} index={index}>
      {this.props.ludicrousMode ? (
        <TransactionItem transaction={this.props.transactions[index]} />
      ) : (
        <CustomerTransactionItem transaction={this.props.transactions[index]} />
      )}
    </BackgroundContainer>
  )
}

const BackgroundContainer: any = styled.div`
  background: ${(props: any) => (props.index % 2 === 0 ? lightGrey : white)};
  border-bottom: ${lightGrey};
`

export default CustomerTransactionList
