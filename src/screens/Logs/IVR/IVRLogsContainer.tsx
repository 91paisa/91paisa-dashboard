import * as React from 'react'
import styled from 'styled-components'
import { fog } from '../../../styles/colors'
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
            searchLogs={this.handleCustomerPhoneSearch}
            searchText={this.state.customerPhone}
          />
        </ActionContainer>
        <IVRLogsList
          customerPhone={this.state.customerPhone}
          handleCustomerPhoneToSearch={this.handleCustomerPhoneSearch}
        />
      </>
    )
  }
  private handleCustomerPhoneSearch = (
    customerPhoneToSearch: string | undefined,
  ) => {
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
