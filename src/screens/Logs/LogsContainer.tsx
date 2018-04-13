import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import LogsNavigation from './LogsNavigation'

class LogsContainer extends React.Component<RouteComponentProps<{}>> {
  public render() {
    return <LogsNavigation />
  }
}

export default withRouter(LogsContainer as any)
