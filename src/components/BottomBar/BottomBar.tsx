import { Component, default as React } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { dark, lightGrey } from '../../styles/colors'

class BottomBar extends Component {
  public render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <StyledLink exact={true} to={`/`}>
          Home
        </StyledLink>
        <StyledLink to={`/customers`}>Cus</StyledLink>
        <StyledLink to={`/transactions`}>trx</StyledLink>
        <StyledLink to={`/settings`}>Setrin</StyledLink>
      </div>
    )
  }
}
const active = 'active'
const StyledLink = styled(NavLink)`
  width: 48px;
  color: ${dark};
  display: block;
  opacity: 0.4;
  padding: 0.3rem 1.5rem;
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
export default BottomBar
