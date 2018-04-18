import * as React from 'react'
import styled from 'styled-components'
import { fetchIVRLogsAPI, IIVRLog } from '../../../api/logs-api'
import { fog } from '../../../styles/colors'
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

const ActionContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${fog};
`

export default IVRLogsContainer
