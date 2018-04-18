import * as React from 'react'
import { fetchIVRLogsAPI, IIVRLog } from '../../../api/logs-api'
import { getRowHeightForIVRLogItem } from '../../../helpers/unit-helper'
import { ActionContainer } from '../LogStyles'
import IVRLogItem from './IVRLogItem'
import IVRLogSearch from './IVRLogSearch'
import LogsList from './LogsList'

class IVRLogsContainer extends React.Component<{}> {
  public state = {
    customerPhone: '',
  }
  public render() {
    return (
      <>
        <ActionContainer>
          <IVRLogSearch
            search={this.updateCustomerPhone}
            updateSearchText={this.state.customerPhone}
          />
        </ActionContainer>
        <LogsList
          rowHeight={getRowHeightForIVRLogItem()}
          api={fetchIVRLogsAPI}
          searchFilter={this.state.customerPhone}
          updateSearchFilter={this.updateCustomerPhone}
        >
          {(log: IIVRLog) => (
            <IVRLogItem
              log={log}
              updateSearchFilter={this.updateCustomerPhone}
            />
          )}
        </LogsList>
      </>
    )
  }
  private updateCustomerPhone = (customerPhoneToSearch: string) => {
    this.setState({ customerPhone: customerPhoneToSearch })
  }
}

export default IVRLogsContainer
