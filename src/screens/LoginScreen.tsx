import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'
import { IAuthActions, login } from '../actions/auth-actions'
import { setHeaders } from '../api/setHeaders'
import LoginButton from '../components/Buttons/LoginButton'
import TextInput, { type } from '../components/TextInput/TextInput'
import { primary, white } from '../styles/colors'
import { phone } from '../styles/screenSize'
interface IProps {
  login: any
}
interface IState {
  email: string
  error: string
  loading: boolean
  password: string
}
class LoginScreen extends Component<IProps, IState> {
  public state = {
    email: '',
    error: '',
    loading: false,
    password: '',
  }

  public componentWillMount() {
    setHeaders()
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
              this.setState({ loading: true }, () => {
                const { email, password } = this.state
                this.props.login(email, password)
              })
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
const mapDispatchToProps = (dispatch: Dispatch<IAuthActions>) =>
  bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(LoginScreen)
