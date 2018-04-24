import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { getEkoBalance, getNodalBalance } from '../actions/balances-actions'
import { getAllCustomers } from '../actions/customer-actions'
import { getAllReviewers } from '../actions/reviewer-actions'
import { getAllTransactions } from '../actions/transactions-actions'
import { setHeadersApi } from '../api/set-headers-api'
import BottomBar from '../components/BottomBar/BottomBar'
import NavBar from '../components/NavBar/NavBar'
import Content from './Content'

interface IProps {
  getAllCustomers: any
  getAllTransactions: any
  getNodalBalance: any
  getEkoBalance: any
  getAllReviewers: any
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
            <NavBar />
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
    _.getAllReviewers()
  }

  private updateWindowDimensions = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight })
}

const PhoneContainer = styled.div`
  display: block;
`
const Container = styled.div`
  display: grid;
  height: 100vh;
  overflow: no-content;
  grid-template-rows: 3.5rem 1fr;
`
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getAllCustomers,
      getAllReviewers,
      getAllTransactions,
      getEkoBalance,
      getNodalBalance,
    },
    dispatch,
  )
export default connect(null, mapDispatchToProps)(Home)
