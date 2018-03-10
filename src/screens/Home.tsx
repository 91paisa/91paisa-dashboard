import { Component, default as React } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { getAllCustomers } from '../actions/customer-actions'
import { setHeadersApi } from '../api/set-headers-api'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from './Content'
interface IProps {
  getAllCustomers: any
}
class Home extends Component<IProps, {}> {
  public componentWillMount() {
    setHeadersApi()
  }
  public componentDidMount() {
    this.props.getAllCustomers()
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
  grid-template-columns: 14rem 1fr;
`
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ getAllCustomers }, dispatch)
export default connect(null, mapDispatchToProps)(Home)
