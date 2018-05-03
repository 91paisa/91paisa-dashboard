import { Component, default as React } from 'react'
import { getStatsForTodayAPI, IStats } from '../../api/statistics-api'
import DailySummary from './DailySummary/DailySummary'

class Dashboard extends Component {
  public state = {
    beneficiary: undefined,
    customer: undefined,
    splitTransaction: undefined,
    transaction: undefined,
  }
  public componentDidMount() {
    getStatsForTodayAPI().then(r => {
      this.setState({ ...r })
    })
  }
  public render() {
    return <DailySummary stats={this.state as IStats} />
  }
}

export default Dashboard
