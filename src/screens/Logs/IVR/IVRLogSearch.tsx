import * as React from 'react'
import styled from 'styled-components'
import { fog } from '../../../styles/colors'
interface IProps {
  searchLogs: (customerPhone: string | undefined) => void
  searchText: string
}
class IVRLogSearch extends React.Component<IProps> {
  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputContainer>
          <div>🔍</div>
          <Input
            type={'text'}
            onChange={this.handleChange}
            value={this.props.searchText}
            placeholder={'Enter customer ph. no.'}
          />
          {this.props.searchText && (
            <CancelButton onClick={this.handleClearSearch}> ✕</CancelButton>
          )}
        </InputContainer>
      </Form>
    )
  }

  private handleClearSearch = () => {
    this.props.searchLogs('')
  }

  private handleSubmit = (e: any) => {
    e.preventDefault()
    const customerPhone = this.props.searchText as string
    this.props.searchLogs(customerPhone)
  }

  private handleChange = (e: any) => {
    const searchText = e.target.value
    if (searchText === '' || !isNaN(searchText)) {
      this.props.searchLogs(searchText)
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
