import * as React from 'react'
import { Route, RouteComponentProps, withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../../components/Card'
import {
  dark,
  fog,
  graphite,
  lightGrey,
  primary,
  white,
} from '../../styles/colors'
import { phone } from '../../styles/screenSize'
import IVRLogsContainer from './IVR/IVRLogsContainer'
import NodalLogsContainer from './Nodal/NodalLogsContainer'
import ReviewerLogsContainer from './Reviewer/ReviewerLogsContainer'

class LogsNavigation extends React.Component<RouteComponentProps<{}>> {
  public componentDidMount() {
    this.props.history.replace('/logs/nodal')
  }

  public componentWillUpdate(newProp: RouteComponentProps<{}>) {
    this.stayOnSamePath(newProp)
  }

  public render() {
    return (
      <>
        <TabsOuterContainer>
          <TabsContainer>
            <LogTab to={'/logs/nodal'}>Nodal</LogTab>
            <LogTab to={'/logs/ivr'}>IVR</LogTab>
            <LogTab to={'/logs/reviewer'}>Reviewer</LogTab>
          </TabsContainer>
        </TabsOuterContainer>
        <ContentContainer>
          <switch>
            <Route path={'/logs/nodal'} component={NodalLogsContainer} />
            <Route path={'/logs/ivr'} component={IVRLogsContainer} />
            <Route path={'/logs/reviewer'} component={ReviewerLogsContainer} />
          </switch>
        </ContentContainer>
      </>
    )
  }

  private stayOnSamePath = (props: RouteComponentProps<{}>) => {
    const previousPath = this.props.location.pathname
    const newPath = props.location.pathname
    if (newPath === '/logs/') {
      this.props.history.replace(previousPath)
    }
  }
}

const TabsOuterContainer = styled.div`
  border-bottom: 1px ${fog} solid;
`
const TabsContainer = styled.div`
  max-width: 80rem;
  display: flex;
  margin: 1rem auto -1px auto;
`
const active = 'active'
const LogTab = styled(NavLink)`
  min-width: 7rem;
  padding: auto 2rem;
  line-height: 2.4rem;
  color: ${graphite};
  font-weight: 600;
  border-bottom: 1px ${fog} solid;
  text-align: center;
  border-top: 3px solid ${lightGrey};
  &.${active} {
    color: ${dark};
    background: ${white};
    border-bottom: 1px ${white} solid;
    border-left: 1px ${fog} solid;
    border-right: 1px ${fog} solid;
    border-radius: 0.3rem 0.3rem 0 0;
    border-top: 3px solid ${primary};
  }
  &:hover {
    color: ${dark};
  }
`
const ContentContainer = styled(Card)`
  border-bottom: 1px ${fog} solid;
  max-width: 88rem;
  height: 94%;
  margin: 0 auto;
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
  &:hover {
    box-shadow: none;
  }
  @media (${phone}) {
    border-radius: 0;
  }
`

export default withRouter(LogsNavigation)
