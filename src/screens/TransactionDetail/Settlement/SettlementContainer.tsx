import moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
import { ISettlementContainer } from '../../../api/transaction-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import Space, { SpaceEnum } from '../../../components/Space'
import { getDDMMYYYY, getLT } from '../../../helpers/time-helper'
import SettlementToEkoOrZms from './SettlementToEkoOrZms'
interface IProps {
  settlement: ISettlementContainer
}
class SettlementContainer extends React.Component<IProps> {
  public render() {
    const {
      eko,
      zms,
      createdTimestamp,
      updatedTimestamp,
    } = this.props.settlement
    return (
      <Card>
        <CardTitle>Settlement</CardTitle>
        {renderTimestamps(createdTimestamp, updatedTimestamp)}
        <Space height={SpaceEnum.xs} />
        <Grid>
          {eko && <SettlementToEkoOrZms title={'EKO/-'} {...eko} />}
          {zms && <SettlementToEkoOrZms title={'ZMS'} {...zms} />}
        </Grid>
      </Card>
    )
  }
}

const renderTimestamps = (created: string, updated: string) => (
  <>
    <TimeContainer>
      <TimeTitle>Created:</TimeTitle>
      <div>{getTimeFormat(created)}</div>
    </TimeContainer>
    <TimeContainer>
      <TimeTitle>Updated:</TimeTitle>
      <div>{getTimeFormat(updated)}</div>
    </TimeContainer>
  </>
)

const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  grid-gap: 20px;
  margin-bottom: 12px;
`

const getTimeFormat = (time: string) => (
  <div style={{ display: 'flex' }}>
    <Time>{getLT(time)}</Time>
    <Time>{getDDMMYYYY(time)}</Time>
    <Time> ({moment(time).fromNow()})</Time>
  </div>
)

const Time = styled.div`
  margin-right: 12px;
`

const TimeTitle = styled.p``

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default SettlementContainer
