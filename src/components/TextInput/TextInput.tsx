import { Component, default as React } from 'react'
import styled from 'styled-components'
import { fog, white } from '../../styles/colors'

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
  background: ${white};
  //border: 1px solid ${fog};
  border: none;
  box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 0.4rem;
  font-size: 1rem;
  line-height: 1.2rem;
  outline: none;
  &:focus {
    box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.4);
  }
`

export default TextInput
