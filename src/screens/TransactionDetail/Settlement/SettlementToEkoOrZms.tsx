import * as React from 'react'
import styled from 'styled-components'
import { ISettlement, settlementStatusEnum } from '../../../api/transaction-api'
import Space, { SpaceEnum } from '../../../components/Space'
import { getRouteColor } from '../../../helpers/color-helper'
import { getTimeInLTDDMMYYAGOView } from '../../../helpers/time-helper'
import AmountCell from '../../Transactions/AmountCell'
import SettlementStatus from './SettlementStatus'

interface IProps extends ISettlement {
  title: string
}

interface IContainerProps {
  status: settlementStatusEnum
}
const SettlementToEkoOrZms: React.SFC<IProps> = ({
  amount,
  id,
  status,
  title,
  referenceId,
  createdTimestamp,
  updatedTimestamp,
}: IProps) => (
  <Container status={status}>
    <Title status={status}>{title}</Title>
    <Flex>
      <div>
        <AmountCell style={{ fontSize: '1.3rem' }} amount={amount} />
        <Space height={SpaceEnum.xxs} />
        {!referenceId && <p>reference ID: {referenceId}</p>}
        <Space height={SpaceEnum.m} />
        {renderTimestamps(createdTimestamp, updatedTimestamp)}
      </div>
      <div
        style={{
          alignItems: 'flex-end',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <a
          href={`https://dashboard.razorpay.com/#/app/route/transfers/${id}`}
          target={'_blank'}
        >
          #razorpay
        </a>
        <SettlementStatus status={status} />
      </div>
    </Flex>
  </Container>
)

const renderTimestamps = (created: string, updated: string) => (
  <>
    <TimeContainer>
      <TimeTitle>Created:</TimeTitle>
      <div>{getTimeInLTDDMMYYAGOView(created)}</div>
    </TimeContainer>
    <TimeContainer>
      <TimeTitle>Updated:</TimeTitle>
      <div>{getTimeInLTDDMMYYAGOView(updated)}</div>
    </TimeContainer>
  </>
)

const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  grid-gap: 20px;
  margin-bottom: 2px;
`

const TimeTitle = styled.p``

const Title: any = styled.h3`
  font-weight: 500;
  font-size: 1rem;
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0.3rem 0;
  text-align: center;
  background: transparent;
  border-bottom-color: ${(props: IContainerProps) =>
    getRouteColor(props.status)};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  text-transform: uppercase;
`

const Flex: any = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-between;
`
const Container: any = styled.div`
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props: IContainerProps) => getRouteColor(props.status)};
`
export default SettlementToEkoOrZms
