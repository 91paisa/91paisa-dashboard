import * as React from 'react'
import styled from 'styled-components'
import { IRefund } from '../../../api/transaction-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import Space, { SpaceEnum } from '../../../components/Space'
import { getTimeInLTDDMMYYAGOView } from '../../../helpers/time-helper'
import AmountCell from '../../Transactions/AmountCell'
import SettlementStatus from '../Settlement/SettlementStatus'

class RefundContainer extends React.Component<IRefund> {
  public render() {
    const {
      amount,
      status,
      id,
      updatedTimestamp,
      createdTimestamp,
    } = this.props
    return (
      <Card>
        <CardTitle>Refund</CardTitle>
        <FlexColumn>
          <FlexRow>
            <AmountCell amount={amount} style={{ fontSize: '1.3rem' }} />
            <Space width={SpaceEnum.xxxl} />
            <SettlementStatus status={status} />
            <Space width={SpaceEnum.xxxl} />
            <a
              href={`https://dashboard.razorpay.com/#/app/refunds/${id}`}
              target={'_blank'}
            >
              #razorpay
            </a>
          </FlexRow>
          <Space height={SpaceEnum.l} />
          <TimeContainer>
            <span>Created: </span>
            {getTimeInLTDDMMYYAGOView(createdTimestamp)}
          </TimeContainer>
          <TimeContainer>
            <span>Updated: </span>
            {getTimeInLTDDMMYYAGOView(updatedTimestamp)}
          </TimeContainer>
        </FlexColumn>
      </Card>
    )
  }
}

const FlexRow = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
`
const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  grid-gap: 20px;
  margin-bottom: 2px;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export default RefundContainer
