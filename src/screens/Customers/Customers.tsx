import { Component, default as React } from 'react'
import { AutoSizer, Column, Table } from 'react-virtualized'
import { ICustomer } from '../../api/customer-api'
import Search from './Search'

interface IProps {
  customers: ICustomer[]
}

const rowStyle = {
  background: 'red',
  color: 'white',
}

class Customers extends Component<IProps> {
  public render() {
    return (
      <div style={{ height: '100%' }}>
        <Search />
        <AutoSizer style={{ width: '100%' }}>
          {({ width, height }: any) => (
            <Table
              width={width}
              height={height}
              style={{
                background: 'pink',
              }}
              headerHeight={40}
              rowHeight={48}
              onRowClick={() => alert('click click')}
              overscanColumnCount={3}
              rowCount={this.props.customers.length}
              rowGetter={({ index }) => this.props.customers[index]}
            >
              <Column
                label="Phone"
                width={200}
                dataKey="phone"
                style={rowStyle}
              />
              <Column label="Name" width={300} dataKey="name" />
              <Column label="Mandate" width={100} dataKey="mandateApproved" />
            </Table>
          )}
        </AutoSizer>
      </div>
    )
  }
}

export default Customers
