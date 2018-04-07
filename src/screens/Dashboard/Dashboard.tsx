import { Component, default as React } from 'react'
import { customerStats } from '../../api/statistics-api'
import { rangeEnum } from '../../helpers/date-range-helper'

class Dashboard extends Component {
  public state = {
    hi: 'bye',
  }

  public componentDidMount() {
    customerStats(rangeEnum.days)
    customerStats(rangeEnum.weeks)
    customerStats(rangeEnum.months)
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
