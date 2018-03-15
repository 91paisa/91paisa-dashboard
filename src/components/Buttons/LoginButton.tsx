import * as React from 'react'
import styled from 'styled-components'
import { primary, primaryDark, white } from '../../styles/colors'
import Spinner from '../Spinner/Spinner'

interface IProps {
  loading: boolean
  onClick: () => void
}

const LoginButton: React.SFC<IProps> = (props: IProps) => (
  <Button onClick={props.loading ? undefined : props.onClick}>
    {props.loading ? <Spinner /> : <Text>Login</Text>}
  </Button>
)

const Button = styled.button`
  background: ${primary};
  margin: 12px auto;
  width: 100%;
  height: 3rem;
  padding: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  &:focus {
    border: 0.5px solid ${primaryDark};
  }
`

const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${white};
`

export default LoginButton
