import { Component, default as React } from 'react'
import styled from 'styled-components'
import { fog, lightGrey } from '../../styles/colors'

export enum type {
  password = 'password',
  text = 'text',
}

interface IProps {
  label?: string
  onChange: (value: string) => void
  placeholder: string
  type?: type
  disabled?: boolean
}

class TextInput extends Component<IProps> {
  public state = {
    value: '',
  }

  public render() {
    const { placeholder, label } = this.props
    return (
      <div>
        {label && <label>{label}</label>}
        <Input
          disabled={this.props.disabled}
          type={this.props.type}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  private handleChange = (event: any) => {
    const value = event.target.value
    this.setState({ value }, () => {
      this.props.onChange(value)
    })
  }
}

const Input = styled.input`
  margin: 0.5rem auto;
  width: 100%;
  padding: 0.7rem;
  display: inline-block;
  background: ${lightGrey};
  border-radius: 0.4rem;
  line-height: 1.2rem;
  outline: none;
  border: none;
  &:focus {
    border: 0.5px solid ${fog};
  }
  }
`

export default TextInput
