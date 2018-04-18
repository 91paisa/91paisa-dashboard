import * as React from 'react'
import styled from 'styled-components'
import { fog } from '../../../styles/colors'
interface IProps {
  search: (customerPhone: string) => void
  updateSearchText: string
}
class IVRLogSearch extends React.Component<IProps> {
  public state = {
    searchText: '',
  }

  public componentWillReceiveProps(newProps: IProps) {
    if (newProps.updateSearchText !== this.state.searchText) {
      this.setState({ searchText: newProps.updateSearchText })
    }
  }
  public render() {
    const { searchText } = this.state
    return (
      <Form>
        <InputContainer>
          <span>🔍</span>
          <Input
            type={'text'}
            onChange={this.change}
            value={searchText}
            placeholder={'Enter customer ph. no.'}
          />
          {searchText && (
            <CancelButton onClick={this.clearSearchText}> ✕</CancelButton>
          )}
        </InputContainer>
      </Form>
    )
  }

  private clearSearchText = () => {
    this.setState({ searchText: '' }, () =>
      this.props.search(this.state.searchText),
    )
  }

  private change = (e: any) => {
    const search = e.target.value
    if (search === '' || !isNaN(search)) {
      this.setState({ searchText: search }, () => {
        const { searchText } = this.state
        if (searchText.length === 10) {
          this.props.search(searchText)
        }
      })
    }
  }
}

const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  padding: 0.4rem;
`
const InputContainer = styled.div`
  border: 1px solid ${fog};
  border-radius: 0.5rem;
  min-width: 15rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
`
const Form = styled.form`
  align-items: center;
  display: flex;
`

const CancelButton = styled.div`
  background: none;
  outline: none;
`

export default IVRLogSearch
