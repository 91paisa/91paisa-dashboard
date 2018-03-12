import * as React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { lightGrey } from '../styles/colors'
import CustomersContainer from './Customers/CustomersContainer'
import Dashboard from './Dashboard/Dashboard'
import TransactionsContainer from './Transactions/TransactionsContainer'

const Content = () => (
  <Container>
    <Switch>
      <Route exact={true} path={'/'} component={Dashboard} />
      <Route path={'/customers'} component={CustomersContainer} />
      <Route path={'/transactions'} component={TransactionsContainer} />
    </Switch>
  </Container>
)

const Container = styled.div`
  background: ${lightGrey};
  padding: 0 1rem;
  overflow: hidden;
`

export default Content
