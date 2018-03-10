import * as React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { lightGrey } from '../styles/colors'
import Customers from './Customers/Customers'
import Dashboard from './Dashboard/Dashboard'
import Transactions from './Transactions/Transactions'

const Content = () => (
  <Container>
    <Switch>
      <Route exact={true} path={'/'} component={Dashboard} />
      <Route path={'/customers'} component={Customers} />
      <Route path={'/transactions'} component={Transactions} />
    </Switch>
  </Container>
)

const Container = styled.div`
  background: ${lightGrey};
`

export default Content
