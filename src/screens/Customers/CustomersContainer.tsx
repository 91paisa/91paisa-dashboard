import { Component, default as React } from 'react'
import CustomersListContainer from './CustomerListContainer'
import Search from './Search'

class CustomersContainer extends Component {
  public render () {
    return (
      <div>
        <Search/>
        <CustomersListContainer/>
      </div>
    )
  }
}

export default CustomersContainer
