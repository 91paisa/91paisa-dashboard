import { Component, default as React } from 'react'
import styled from 'styled-components'
import LoginButton from '../components/Buttons/LoginButton'
import TextInput, { type } from '../components/TextInput/TextInput'
import { primary, white } from '../styles/colors'
import { phone } from '../styles/screenSize'
class LoginScreen extends Component {
  public state = {
    email: '',
    error: '',
    loading: false,
    password: '',
  }

  public render() {
    return (
      <Container>
        <FormContainer>
          <Logo>91paisa</Logo>
          <TextInput placeholder="Email" onChange={this.handleEmailChange} />
          <TextInput
            placeholder="Password"
            type={type.password}
            onChange={this.handlePasswordChange}
          />
          <LoginButton
            loading={this.state.loading}
            onClick={() => {
              alert('login')
              this.setState({ loading: true })
            }}
          />
        </FormContainer>
      </Container>
    )
  }

  private handleEmailChange = (email: string) => this.setState({ email })
  private handlePasswordChange = (password: string) =>
    this.setState({ password })
}

const Container = styled.div`
  background: ${primary};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr minmax(300px, 400px) 0.2fr;
  grid-template-rows: 1fr minmax(300px, 500px) 1fr;
  @media (${phone}) {
    grid-template-columns: 0.1fr 1fr 0.1fr;
    grid-template-rows: 1em auto 1fr;
  }
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

const Logo = styled.p`
  font-size: 2.4rem;
  text-align: center;
  letter-spacing: 0.1rem;
  padding-bottom: 3rem;
`

export default LoginScreen
