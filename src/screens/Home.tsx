import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { getEkoBalance, getNodalBalance } from '../actions/balances-actions'
import { getAllCustomers } from '../actions/customer-actions'
import { getAllTransactions } from '../actions/transactions-actions'
import { setHeadersApi } from '../api/set-headers-api'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from './Content'

interface IProps {
  getAllCustomers: any
  getAllTransactions: any
  getNodalBalance: any
  getEkoBalance: any
}
class Home extends Component<IProps, {}> {
  public componentWillMount() {
    setHeadersApi()
  }
  public componentDidMount() {
    const _ = this.props
    _.getAllCustomers()
    _.getAllTransactions()
    _.getNodalBalance()
    _.getEkoBalance()
  }
  public render() {
    return (
      <Router>
        <Container>
          <Sidebar />
          <Content />
        </Container>
      </Router>
    )
  }
}

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 15rem 1fr;
`
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { getAllCustomers, getNodalBalance, getEkoBalance, getAllTransactions },
    dispatch,
  )
export default connect(null, mapDispatchToProps)(Home)
