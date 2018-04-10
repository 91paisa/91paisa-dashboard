import { Component, default as React } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { dark, lightGrey, white } from '../../styles/colors'

class BottomBar extends Component {
  public render() {
    return (
      <OuterContainer>
        <Container>
          <StyledLink exact={true} to={`/`}>
            🏠
          </StyledLink>
          <StyledLink to={`/customers`}>👳‍</StyledLink>
          <StyledLink to={`/transactions`}>💸</StyledLink>
          <StyledLink to={`/settings`}>⚙️</StyledLink>
        </Container>
      </OuterContainer>
    )
  }
}
const OuterContainer = styled.div`
  display: block;
  overflow: no-content;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`
const Container = styled.div`
  display: flex;
  background: ${white};
  justify-content: space-evenly;
  width: 100vw;
  height: 3.5rem;
  border-top: solid 1px ${lightGrey};
`

const active = 'active'
const StyledLink = styled(NavLink)`
  width: 48px;
  color: ${dark};
  display: inline;
  opacity: 0.4;
  margin: auto;
  text-decoration: none;
  font-size: 2rem;
  &.${active} {
    opacity: 1;
  }
`
export default BottomBar
