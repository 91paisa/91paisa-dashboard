import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import styled from 'styled-components'
import {
  authStatus,
  IAuthActions,
  loading,
  login,
} from '../actions/auth-actions'
import { setHeadersApi } from '../api/set-headers-api'
import LoginButton from '../components/Buttons/LoginButton'
import TextInput, { type } from '../components/TextInput/TextInput'
import { IReduxState } from '../store/initial-state'
import { alertRed, primary, white } from '../styles/colors'
import { phone } from '../styles/screenSize'

interface IProps {
  login: any
  loading: any
  status: authStatus
}

interface IState {
  email: string
  error: string
  password: string
}

class LoginScreen extends Component<IProps, IState> {
  public state = {
    email: '',
    error: '',
    password: '',
  }

  public componentWillMount() {
    setHeadersApi()
  }

  public render() {
    return (
      <Container>
        <FormContainer onSubmit={this.handleSubmit}>
          <Logo>91paisa</Logo>
          <TextInput placeholder="Email" onChange={this.handleEmailChange} />
          <TextInput
            placeholder="Password"
            type={type.password}
            onChange={this.handlePasswordChange}
          />
          <LoginButton
            loading={this.props.status === authStatus.loading}
            onClick={() => {
              this.handleSubmit()
            }}
          />
          {this.props.status === authStatus.failure && (
            <p style={{ color: alertRed }}>Unable to login</p>
          )}
        </FormContainer>
      </Container>
    )
  }

  private handleEmailChange = (email: string) => this.setState({ email })
  private handlePasswordChange = (password: string) =>
    this.setState({ password })
  private handleSubmit = (e?: any) => {
    if (e) {
      e.preventDefault()
    }
    this.props.loading()
    const { email, password } = this.state
    this.props.login(email, password)
  }
}

const Container = styled.div`
  background: ${primary};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 2fr minmax(300px, 400px) 0.2fr;
  grid-template-rows: 1fr auto 1fr;
  @media (${phone}) {
    grid-template-columns: 1% 1fr 1%;
    grid-template-rows: 1% auto 1fr;
  }
`

const FormContainer = styled.form`
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
  @media (${phone}) {
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
`

const mapStateToProps = (state: IReduxState) => {
  return {
    status: state.auth.status,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthActions>) =>
  bindActionCreators({ login, loading }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
