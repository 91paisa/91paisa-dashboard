import { Component, default as React } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { primary, white } from '../../styles/colors'

class NavBar extends Component {
  public render() {
    return (
      <Container>
        <LogoNavLink exact={true} to={`/`}>
          91P
        </LogoNavLink>
        <StyledLink to={`/customers`}>Customers</StyledLink>
        <StyledLink to={`/transactions`}>Transactions</StyledLink>
        <StyledLink to={`/settings`}>Settings</StyledLink>
      </Container>
    )
  }
}

const Container = styled.div`
  background: ${primary};
  display: flex;
`

const active = 'active'
const StyledLink = styled(NavLink)`
  list-style-type: none;
  color: ${white};
  display: block;
  opacity: 0.5;
  width: 8rem;
  line-height: 2;
  text-align: center;
  font-size: 1rem;
  margin: auto 0;
  font-weight: 600;
  text-decoration: none;
  &.${active} {
    opacity: 1;
  }
  &:hover {
    opacity: 0.85;
  }
`

const LogoNavLink = styled(NavLink)`
  color: ${white};
  font-family: 'American Typewriter';
  font-weight: 800;
  text-decoration: none;
  padding: 0.5rem;
  font-size: 1.4rem;
  margin: auto 2rem auto 0.5rem;
`
export default NavBar
