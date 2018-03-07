import { Component, default as React } from 'react'
interface IProps {
  loading: boolean
}
class LoginButton extends Component<IProps, {}> {
  public render() {
    return (
      <div>
        <button>Login</button>
      </div>
    )
  }
}

export default LoginButton
