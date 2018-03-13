import * as React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { lightGrey } from '../styles/colors'
import CustomerDetailContainer from './CustomerDetail/CustomerDetailContainer'
import CustomersContainer from './Customers/CustomersContainer'
import Dashboard from './Dashboard/Dashboard'
import TransactionsContainer from './Transactions/TransactionsContainer'

const Content = () => (
  <OuterContainer>
    <Switch>
      <Route exact={true} path={'/'} component={Dashboard} />
      <Route exact={true} path={'/customers'} component={CustomersContainer} />
      <Route
        exact={true}
        path={'/transactions'}
        component={TransactionsContainer}
      />
      <Route
        path={'/customers/:customerPhone'}
        component={CustomerDetailContainer}
      />
    </Switch>
  </OuterContainer>
)

const OuterContainer = styled.div`
  background: ${lightGrey};
  overflow: hidden;
`

export default Content
