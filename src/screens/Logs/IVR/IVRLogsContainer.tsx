import * as React from 'react'
import { fetchIVRLogsAPI, IIVRLog } from '../../../api/logs-api'
import { getRowHeightForIVRLogItem } from '../../../helpers/unit-helper'
import { ActionContainer } from '../LogStyles'
import IVRLogItem from './IVRLogItem'
import IVRLogList from './IVRLogList'
import IVRLogSearch from './IVRLogSearch'
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
        <IVRLogList
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
        </IVRLogList>
      </>
    )
  }
  private updateCustomerPhone = (customerPhoneToSearch: any) => {
    this.setState({ customerPhone: customerPhoneToSearch })
  }
}

export default IVRLogsContainer
