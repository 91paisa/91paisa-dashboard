import axios from 'axios'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { IAuthActions, logout } from './actions/auth-actions'
import Home from './screens/Home'
import LoginScreen from './screens/LoginScreen'
import { IReduxState } from './store/initial-state'

interface IProps {
  token: string | null
  logout: any
}

class App extends React.Component<IProps, {}> {
  public componentDidMount () {
    this.interceptNetwork()
  }

  public render () {
    return this.props.token ? <Home/> : <LoginScreen/>
  }

  private interceptNetwork () {
    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error.response) {
          if (error.response.status === 403) {
            this.props.logout()
          } else {
            // const { status, statusText } = error.response
            // console.log(status, statusText, error.response)
          }
        }
        return Promise.reject(error)
      },
    )
  }
}

function mapStateToProps (state: IReduxState) {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAuthActions>) =>
  bindActionCreators({logout}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
