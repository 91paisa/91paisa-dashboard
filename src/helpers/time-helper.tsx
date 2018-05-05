import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'

export const getDDMMYY = (time: string) => moment(time).format('DD/MM/YY')
export const getLT = (time: string) => moment(time).format('LT')

export const getCallDuration = (start: string, end: string) => {
  const startDate = moment(start)
  const endDate = moment(end)
  return Math.floor(moment.duration(endDate.diff(startDate)).asSeconds()) + 's'
}

export const getTimeInLTDDMMYYAGOView = (time: string) => (
  <div style={{ display: 'flex' }}>
    <Time>{getLT(time)}</Time>
    <Time>{getDDMMYY(time)}</Time>
    <Time> ({moment(time).fromNow()})</Time>
  </div>
)

const Time = styled.div`
  margin-right: 12px;
`
