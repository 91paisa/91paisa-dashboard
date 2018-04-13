import { Component, default as React } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { primary, primaryLight, white } from '../../styles/colors'

class NavBar extends Component {
  public render() {
    return (
      <Container>
        <LogoNavLinkContainer exact={true} to={`/`}>
          <Logo>91P</Logo>
        </LogoNavLinkContainer>
        <StyledLink to={`/customers`}>Customers</StyledLink>
        <StyledLink to={`/transactions`}>Transactions</StyledLink>
        <StyledLink to={`/logs`}>Logs</StyledLink>
        <StyledLink to={`/settings`}>Settings</StyledLink>
      </Container>
    )
  }
}

const Container = styled.div`
  background: ${primary};
  display: flex;
  user-select: none;
`

const active = 'active'
const StyledLink = styled(NavLink)`
  list-style-type: none;
  color: ${white};
  display: block;
  color: ${primaryLight};
  line-height: 2;
  margin: auto 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &.${active} {
    color: ${white};
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    color: ${white};
  }
`

const LogoNavLinkContainer = styled(NavLink)`
  margin: auto 2rem auto 1rem;
  background: white;
  text-decoration: none;
  transform: skew(-12deg);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  transition-duration: 300ms;
  &:hover {
    transform: skew(0deg);
  }
`

const Logo = styled.p`
  color: ${primary};
  padding: 0.2rem 0.7rem;
  font-family: 'American Typewriter', monospace;
  font-weight: 800;
  text-decoration: none;
  transform: skew(12deg);
  transition-duration: 300ms;
  font-size: 1.6rem;
  &:hover {
    transform: skew(0deg);
  }
`
export default NavBar
