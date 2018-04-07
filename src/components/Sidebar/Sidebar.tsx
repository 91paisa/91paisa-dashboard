import { Component, default as React } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { lightGrey, primary, white } from '../../styles/colors'

class Sidebar extends Component {
  public render() {
    return (
      <Container>
        <StyledLink exact={true} to={`/`}>
          Dashboard
        </StyledLink>
        <StyledLink to={`/customers`}>Customers</StyledLink>
        <StyledLink to={`/transactions`}>Transactions</StyledLink>
        <StyledLink to={`/settings`}>Settings</StyledLink>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  background: ${primary};
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.5);
`

const active = 'active'
const StyledLink = styled(NavLink)`
  list-style-type: none;
  color: ${white};
  display: block;
  opacity: 0.7;
  line-height: 2;
  padding: 0 1.5rem;
  margin: 0.6rem 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  &.${active} {
    opacity: 1;
    border-bottom: solid 4px ${white};
  }
  &:hover {
    border-bottom: solid 4px ${lightGrey};
  }
`
export default Sidebar
