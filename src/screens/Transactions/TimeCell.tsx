import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import Space, { SpaceEnum } from '../../components/Space'

interface IProps {
  time: string
  space?: SpaceEnum
}

const TimeCell: React.SFC<IProps> = ({ time, space }: IProps) => (
  <Container>
    <p>{moment(time).format('LT')}</p>
    <Space width={space} />
    <p>{moment(time).format('DD/MM/YYYY')}</p>
  </Container>
)

const Container = styled.div`
  display: block;
  font-size: 1.1rem;
`

export default TimeCell
