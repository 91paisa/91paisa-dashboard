import { Component, default as React } from 'react'
import { AutoSizer, Column, Table } from 'react-virtualized'
// tslint:disable-next-line
import 'react-virtualized/styles.css'
import { ICustomer } from '../../api/customer-api'
interface IProps {
  customers: ICustomer[]
}
class Customers extends Component<IProps> {
  public render() {
    return (
      <AutoSizer style={{ width: '100%' }}>
        {({ width, height }: any) => (
          <Table
            width={width}
            height={height}
            headerHeight={40}
            rowHeight={48}
            overscanColumnCount={3}
            rowCount={this.props.customers.length}
            rowGetter={({ index }) => this.props.customers[index]}
          >
            <Column label="Phone" width={200} dataKey="phone" />
            <Column label="Name" width={300} dataKey="name" />
            <Column label="Mandate" width={100} dataKey="mandateApproved" />
          </Table>
        )}
      </AutoSizer>
    )
  }
}

export default Customers
