import { Component, default as React, Fragment } from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'
import { alertRed } from '../../styles/colors'
interface IProps {
  logout: any
}

class Settings extends Component<IProps> {
  public render() {
    return (
      <Fragment>
        <Container>
          <Item onClick={() => this.props.logout()}>Logout</Item>
        </Container>
      </Fragment>
    )
  }
}

const Container = styled(Card)`
  max-width: 300px;
  border-radius: 200px;
  padding: 0;
  margin: 1rem auto;
`

const Item = styled.button`
  padding: 1rem;
  font-family: 'Chalkboard SE', 'Comic Sans MS', 'Monospaced', 'Papyrus';
  background: none;
  letter-spacing: 2px;
  border-radius: 200px;
  background: ${alertRed};
  font-weight: bold;
  color: white;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font-size: 1.2rem;
`
export default Settings
