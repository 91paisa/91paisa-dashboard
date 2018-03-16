import * as React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { lightGrey } from '../styles/colors'
import CustomerDetailContainer from './CustomerDetail/CustomerDetailContainer'
import CustomersContainer from './Customers/CustomersContainer'
import Dashboard from './Dashboard/Dashboard'
import SettingsContainer from './Settings/SettingsContainer'
import TransactionDetailContainer from './TransactionDetail/TransactionDetailContainer'
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
      <Route
        path={'/transactions/:transactionId'}
        component={TransactionDetailContainer}
      />
      <Route path={'/settings'} component={SettingsContainer} />
    </Switch>
  </OuterContainer>
)

const OuterContainer = styled.div`
  background: ${lightGrey};
  overflow: hidden;
  border-left: ${lightGrey} 2px solid;
`

export default Content
