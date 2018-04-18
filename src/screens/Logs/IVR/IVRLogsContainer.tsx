import * as React from 'react'
import styled from 'styled-components'
import { IIVRLogs } from '../../../api/logs-api'
import { fog } from '../../../styles/colors'
import IVRLogItem from './IVRLogItem'
import IVRLogSearch from './IVRLogSearch'
import IVRLogsList from './IVRLogsList'

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
        <IVRLogsList
          searchFilter={this.state.customerPhone}
          updateSearchFilter={this.updateCustomerPhone}
        >
          {(log: IIVRLogs) => (
            <IVRLogItem
              log={log}
              updateSearchFilter={this.updateCustomerPhone}
            />
          )}
        </IVRLogsList>
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
