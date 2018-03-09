import { Component, default as React } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar/Sidebar'
import Content from './Content'

class Home extends Component {
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

export default Home
