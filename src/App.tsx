import axios from 'axios'
import * as React from 'react'
import { connect } from 'react-redux'
import { setHeaders } from './api/setHeaders'
import Home from './screens/Home'
import LoginScreen from './screens/LoginScreen'
import { IReduxState } from './store/initial-state'

interface IProps {
  token: string | null
}
class App extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.interceptNetwork()
    setHeaders()
  }

  public render() {
    return this.props.token ? <Home /> : <LoginScreen />
  }

  private interceptNetwork() {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response) {
          if (error.response.status === 403) {
            alert('remove token')
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

function mapStateToProps(state: IReduxState) {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps)(App)
