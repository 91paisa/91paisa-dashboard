import { Component, default as React } from 'react'
import { RouteComponentProps } from 'react-router'
import { AutoSizer, List } from 'react-virtualized'
import { ICustomer } from '../../api/customer-api'
import { white } from '../../styles/colors'
import CustomerListItem from './CustomerListItem'

interface IProps extends RouteComponentProps<IProps> {
  customers: ICustomer[]
}

class CustomerList extends Component<IProps, {}> {
  public componentDidMount() {
    // tslint:disable-next-line
    console.log(this.props.customers, 'hiii')
  }

  public render() {
    return (
      <div style={{ width: '100%', height: '100%', background: white }}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height - 52} // ~3.5rem
              rowCount={this.props.customers.length}
              rowHeight={76}
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
