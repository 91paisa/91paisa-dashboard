import { Component, default as React } from 'react'
import { Route } from 'react-router'
import styled from 'styled-components'
import { fog } from '../../styles/colors'
import { isPhoneOrTable } from '../../styles/screenSize'
import CustomerDetailContainer from '../CustomerDetail/CustomerDetailContainer'
import CustomersListContainer from './CustomerListContainer'
class CustomersContainer extends Component {
  public render() {
    if (isPhoneOrTable()) {
      return (
        <PhoneContainer>
          <CustomersListContainer />
        </PhoneContainer>
      )
    }
    return (
      <Container>
        <CustomersListContainer />
        <BorderGap />
        <Route
          path={'/customers/:customerPhone'}
          component={CustomerDetailContainer}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20rem 1px 1fr;
`

const PhoneContainer = styled.div`
  display: block;
  box-sizing: content-box;
  padding-bottom: 3.5rem;
  height: 100vh;
  overflow: scroll;
  grid-template-columns: 20rem 1px 1fr;
`

const BorderGap = styled.div`
  background: ${fog};
`

export default CustomersContainer
