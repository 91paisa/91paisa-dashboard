import { Component, default as React } from 'react'
import { getStatsForTodayAPI } from '../../api/statistics-api'
import DailySummary from './DailySummary/DailySummary'

class Dashboard extends Component {
  public state = {
    customer: undefined,
  }
  public componentDidMount() {
    getStatsForTodayAPI().then(r => {
      this.setState({ customer: { ...r } })
    })
  }
  public render() {
    return (
      <div>
        <DailySummary customerStats={this.state.customer} />
      </div>
    )
  }
}

export default Dashboard
