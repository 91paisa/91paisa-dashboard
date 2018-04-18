import * as React from 'react'
import styled from 'styled-components'
import { getGithubId } from '../helpers/reviewer-helper'
import { fog } from '../styles/colors'

class Avatar extends React.Component {
  public render() {
    return (
      <Container
        src={`https://avatars1.githubusercontent.com/u/${getGithubId(
          '',
        )}?s=100&v=4`}
      />
    )
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
