import { Component, default as React } from 'react'
import DailySummary from './DailySummary/DailySummary'

class Dashboard extends Component {
  public render() {
    return (
      <div>
        <DailySummary />
      </div>
    )
  }
}

export default Dashboard
