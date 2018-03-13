import { Component, default as React } from 'react'
import { RouteComponentProps } from 'react-router'
import { AutoSizer, Column } from 'react-virtualized'
import { ICustomer } from '../../api/customer-api'
import {
  evenRow,
  headerRow,
  oddRow,
  TableContainer,
} from '../../styles/table-styles'
interface IProps extends RouteComponentProps<IProps> {
  customers: ICustomer[]
}

class CustomerList extends Component<IProps, {}> {
  public render() {
    return (
      <div style={{ margin: '0 3rem', height: '88vh' }}>
        <AutoSizer style={{ width: '100%' }}>
          {({ width, height }: any) => (
            <TableContainer
              width={width}
              height={height}
              headerHeight={48}
              rowHeight={52}
              rowStyle={this.rowStyler}
              onRowClick={this.handleRowClick}
              overscanColumnCount={3}
              rowCount={this.props.customers.length}
              rowGetter={({ index }: any) => this.props.customers[index]}
            >
              <Column
                label="Status"
                width={80}
                dataKey="mandateApproved"
                cellRenderer={this.renderMandateCell}
              />
              <Column label="Phone" width={120} dataKey="phone" />
              <Column label="Name" width={300} dataKey="name" />
              <Column
                label="Last Transaction"
                width={400}
                dataKey="lastTransaction"
              />
            </TableContainer>
          )}
        </AutoSizer>
      </div>
    )
  }

  private handleRowClick = ({ rowData }: any) => {
    const nav = this.props.history
    nav.push(nav.location.pathname + '/' + rowData.phone)
  }
  private renderMandateCell = () => {
    return <div>Hi</div>
  }
  private rowStyler = ({ index }: any) => {
    if (index < 0) {
      return headerRow
    }
    return index % 2 === 0 ? evenRow : oddRow
  }
}

export default CustomerList
