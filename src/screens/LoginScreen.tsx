import { Component, default as React } from 'react'
import styled from 'styled-components'
import LoginButton from '../components/LoginButton'
import { primary, white } from '../styles/colors'

class LoginScreen extends Component {
  public state = {
    email: '',
    error: '',
    loading: false,
    password: '',
  }

  public render() {
    const { email, password } = this.state
    return (
      <Container>
        <FormContainer>
          <Logo>91paisa</Logo>
          <Input
            placeholder="E-mail"
            onChange={this.handleEmailChange}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
            value={password}
          />
          <LoginButton loading={false} />
        </FormContainer>
      </Container>
    )
  }
  private handleEmailChange = (e: any) =>
    this.setState({ email: e.target.value })
  private handlePasswordChange = (e: any) =>
    this.setState({ password: e.target.value })
}

const Container = styled.div`
  background: ${primary};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr minmax(300px, 400px) 0.2fr;
  grid-template-rows: 1fr minmax(300px, 500px) 1fr;
  box-shadow: black;
`

const FormContainer = styled.div`
  grid-row-start: 2;
  grid-column-start: 2;
  padding: 1rem;
  background: ${white};
  display: inline-block;
  border-radius: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.4);
  &:hover {
    box-shadow: 0 0 14px rgba(50, 50, 93, 0.3), 0 5px 3px rgba(0, 0, 0, 0.08);
  }
  transition-duration: 300ms;
`
const Input = styled.input`
  padding: 0.2rem;
  margin: 1rem;
`
const Logo = styled.p`
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 0.1rem;
`

export default LoginScreen
