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
import LastTransactionCell from './LastTransactionCell'
import PhoneCell from './PhoneCell'
import StatusCircle from './StatusCircle'
interface IProps extends RouteComponentProps<IProps> {
  customers: ICustomer[]
}

class CustomerList extends Component<IProps, {}> {
  public render() {
    return (
      <div style={{ margin: '0 3rem', height: '87vh' }}>
        <AutoSizer style={{ width: '100%' }}>
          {({ width, height }: any) => (
            <TableContainer
              width={width}
              height={height}
              headerHeight={48}
              rowHeight={60}
              rowStyle={this.rowStyler}
              onRowClick={this.handleRowClick}
              overscanColumnCount={3}
              rowCount={this.props.customers.length}
              rowGetter={({ index }: any) => this.props.customers[index]}
            >
              <Column
                label="Status"
                width={100}
                dataKey="mandateApproved"
                cellRenderer={this.renderMandateCell}
              />
              <Column
                label="Phone"
                width={190}
                dataKey="phone"
                cellRenderer={this.renderPhoneCell}
              />
              <Column label="Name" width={300} dataKey="name" />
              <Column
                label="Last Transaction"
                width={400}
                dataKey="lastTransaction"
                cellRenderer={this.renderLastTransactionCell}
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
  private renderMandateCell = ({ rowData }: any) => (
    <StatusCircle status={rowData.status} />
  )

  private renderLastTransactionCell = ({ rowData }: any) => (
    <LastTransactionCell lastTransaction={rowData.lastTransaction} />
  )

  private renderPhoneCell = ({ rowData }: any) => (
    <PhoneCell phone={rowData.phone} />
  )

  private rowStyler = ({ index }: any) => {
    if (index < 0) {
      return headerRow
    }
    return index % 2 === 0 ? evenRow : oddRow
  }
}

export default CustomerList
