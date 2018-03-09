import { Component, default as React } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { dark, lightGrey } from '../../styles/colors'

class Sidebar extends Component {
  public render() {
    return (
      <div>
        <div style={{ height: '2rem' }} />
        <StyledLink exact={true} to={`/`}>
          Dashboard
        </StyledLink>
        <StyledLink to={`/customers`}>Customers</StyledLink>
        <StyledLink to={`/transactions`}>Transactions</StyledLink>
        <StyledLink to={`/settings`}>Settings</StyledLink>
      </div>
    )
  }
}
const active = 'active'
const StyledLink = styled(NavLink)`
  list-style-type: none;
  color: ${dark};
  display: block;
  opacity: 0.4;
  padding: 0.6rem 1.5rem;
  margin: 0.6rem 0.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  &.${active} {
    opacity: 1;
    background: ${lightGrey};
  }
  &:hover {
    background: ${lightGrey};
  }
`
export default Sidebar
