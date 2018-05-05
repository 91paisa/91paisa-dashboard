import * as React from 'react'
import styled from 'styled-components'
import Space, { SpaceEnum } from '../../components/Space'
import { getDDMMYY, getLT } from '../../helpers/time-helper'

interface IProps {
  time: string
  space?: SpaceEnum
  style?: any
}

const TimeCell: React.SFC<IProps> = ({ time, space, style }: IProps) => (
  <Container style={style}>
    <p>{getLT(time)}</p>
    <Space width={space} height={space} />
    <p>{getDDMMYY(time)}</p>
  </Container>
)

const Container = styled.div`
  display: block;
  font-size: 1.1rem;
`

export default TimeCell
