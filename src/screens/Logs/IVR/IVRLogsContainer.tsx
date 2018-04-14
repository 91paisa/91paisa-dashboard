import * as React from 'react'
import styled from 'styled-components'
import { fog } from '../../../styles/colors'
import IVRLogsList from './IVRLogsList'

class IVRLogsContainer extends React.Component<{}> {
  public render() {
    return (
      <>
        <ActionContainer />
        <IVRLogsList />
      </>
    )
  }
}

const ActionContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom: 1px solid ${fog};
`

export default IVRLogsContainer
