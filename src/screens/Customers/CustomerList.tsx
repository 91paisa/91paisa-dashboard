import { Component, default as React } from 'react'
import { RouteComponentProps } from 'react-router'
import { AutoSizer, List } from 'react-virtualized'
import { ICustomer } from '../../api/customer-api'
import { remToPx } from '../../helpers/unit-helper'
import { white } from '../../styles/colors'
import CustomerListItem from './CustomerListItem'
import Search from './Search'

interface IProps extends RouteComponentProps<IProps> {
  customers: ICustomer[]
}

class CustomerList extends Component<IProps, {}> {
  public render() {
    return (
      <div style={{ width: '100%', height: '100%', background: white }}>
        <Search />
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height - remToPx(8)}
              rowCount={this.props.customers.length}
              rowHeight={remToPx(5.6)}
              overscanColumnCount={3}
              rowRenderer={this.rowRenderer}
              width={width}
            />
          )}
        </AutoSizer>
      </div>
    )
  }

  private rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style,
  }: any) => (
    <div key={key}>
      <CustomerListItem style={style} customer={this.props.customers[index]} />
    </div>
  )
}

export default CustomerList
