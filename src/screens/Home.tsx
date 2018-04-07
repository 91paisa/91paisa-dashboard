import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { getEkoBalance, getNodalBalance } from '../actions/balances-actions'
import { getAllCustomers } from '../actions/customer-actions'
import { getAllTransactions } from '../actions/transactions-actions'
import { setHeadersApi } from '../api/set-headers-api'
import BottomBar from '../components/BottomBar/BottomBar'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from './Content'

interface IProps {
  getAllCustomers: any
  getAllTransactions: any
  getNodalBalance: any
  getEkoBalance: any
}

interface IState {
  width: number
  height: number
}

class Home extends Component<IProps, IState> {
  public state = {
    height: window.innerHeight,
    width: window.innerWidth,
  }

  public componentWillMount() {
    setHeadersApi()
  }

  public componentDidMount() {
    const props = this.props
    setInterval(() => {
      this.fetchData(props)
    }, 400000) // 6.67m
    this.fetchData(props)
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  public render() {
    return (
      <Router>
        {this.state.width > 400 ? (
          <Container>
            <Sidebar />
            <Content />
          </Container>
        ) : (
          <PhoneContainer>
            <Content />
            <BottomBar />
          </PhoneContainer>
        )}
      </Router>
    )
  }

  private fetchData(_: IProps) {
    _.getAllCustomers()
    _.getAllTransactions()
    _.getNodalBalance()
    _.getEkoBalance()
  }

  private updateWindowDimensions = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight })
}

const PhoneContainer = styled.div`
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template-rows: 1fr 40px;
`
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 3rem 1fr;
`
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    { getAllCustomers, getNodalBalance, getEkoBalance, getAllTransactions },
    dispatch,
  )
export default connect(null, mapDispatchToProps)(Home)
