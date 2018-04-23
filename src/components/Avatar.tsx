import * as React from 'react'
import styled from 'styled-components'
import { fog } from '../styles/colors'

interface IProps {
  src: string
}

class Avatar extends React.Component<IProps> {
  public render() {
    return <Container src={this.props.src} />
  }
}

const Container = styled.img`
  background: ${fog};
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid ${fog};
  margin: 0 1rem 1rem 1rem;
`

export default Avatar
