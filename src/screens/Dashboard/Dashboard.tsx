import { Component, default as React } from 'react'

class Dashboard extends Component {
  public state = {
    hi: 'bye',
  }
  public render() {
    return (
      <div>
        <p>D</p>
        <p>A</p>
        <p>S</p>
        <p>H</p>
        <p>B</p>
        <p>o</p>
        <p>R</p>
        <p>D</p>
        <p>.</p>
        <p>{this.state.hi}</p>
      </div>
    )
  }
}

export default Dashboard
