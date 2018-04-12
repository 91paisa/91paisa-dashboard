import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { searchCustomers } from '../../actions/search-actions'
import { IReduxState } from '../../store/initial-state'
import { dark } from '../../styles/colors'

interface IProps {
  searchText: string
  searchCustomers: (searchText: string) => void
}
class Search extends React.Component<IProps> {
  public render() {
    return (
      <Container>
        <Input
          onChange={this.handleChange}
          value={this.props.searchText}
          placeholder="🔍 Type name or phone number to search"
        />
      </Container>
    )
  }

  private handleChange = (e: any) => this.props.searchCustomers(e.target.value)
}

const Container = styled.div`
  margin: auto;
  display: flex;
  height: 3rem;
  box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.2);
  transition-duration: 300ms;
  &:hover {
    box-shadow: 0 3px 5px 0 hsla(0, 0%, 0%, 0.1);
  }
`
const Input = styled.input`
  color: ${dark};
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  outline: none;
  padding: 0 0.8rem;
  font-size: 0.9rem;
  border: none;
`
const mapStateToProps = (state: IReduxState) => ({
  searchText: state.search.customer,
})

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      searchCustomers,
    },
    dispatch,
  )
export default connect(mapStateToProps, mapDispatchToProps)(Search as any)
