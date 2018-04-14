import * as React from 'react'
import styled from 'styled-components'
import { fog } from '../../../styles/colors'
import IVRLogsList from './IVRLogsList'

interface IState {
  // data: IIVRLogs[]
  loadMore: boolean
}
class IVRLogsContainer extends React.Component<{}, IState> {
  public state = {
    // data: [],
    loadMore: true,
  }
  public componentDidMount() {
    // if (this.state.loadMore && this.state.data.length === 0) {
    //   fetchIVRLogsAPI(0).then(data => this.setState({ data }))
    // }
  }
  public render() {
    return (
      <>
        <ActionContainer>
          <input placeholder={'search by customer phone number '} />
        </ActionContainer>
        <IVRLogsList/>
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
