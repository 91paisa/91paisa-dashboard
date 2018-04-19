import moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IReviewLog, reviewerActionEnum } from '../../../api/logs-api'
import Avatar from '../../../components/Avatar'
import Space, { SpaceEnum } from '../../../components/Space'
import { getDDMMYYYY, getLT } from '../../../helpers/time-helper'
import { dark, identity } from '../../../styles/colors'
import { getActionDetailStarting } from './reviewer-log-helper'
import ReviewAction from './ReviewerAction'
interface IProps {
  log: IReviewLog
}

class ReviewerLogItem extends React.Component<IProps> {
  public render() {
    const { reviewer, action, createdTimestamp } = this.props.log
    return (
      <Container>
        <Avatar />
        <div>
          {reviewAndActionView(reviewer, action)}
          {actionDetail(this.props.log)}
          {timestampView(createdTimestamp)}
        </div>
      </Container>
    )
  }
}

const timestampView = (createdTimestamp: string) => (
  <Section>
    <p>
      {moment(createdTimestamp).fromNow()} • {getLT(createdTimestamp)} •{' '}
      {getDDMMYYYY(createdTimestamp)}
    </p>
  </Section>
)

const reviewAndActionView = (
  reviewer: { id: string },
  action: reviewerActionEnum,
) => (
  <Section>
    <span>{reviewer.id}</span>
    <Space width={SpaceEnum.s} />
    <ReviewAction action={action} />
  </Section>
)

const transactionView = (log: IReviewLog) => {
  if (log.transaction) {
    return (
      <StyledLink to={`/transactions/${log.transaction.id}`}>
        <Space width={SpaceEnum.xxs} />
        {log.transaction.amount.toLocaleString('en-In', {
          currency: 'INR',
          style: 'currency',
        })}
        <Space width={SpaceEnum.xxs} />
      </StyledLink>
    )
  }
  return null
}

const customerInfoView = (log: IReviewLog) => {
  if (log.customer) {
    return (
      <StyledLink to={`/customers/${log.customer.id}`}>
        <Space width={SpaceEnum.xxs} />
        {log.customer.name && (
          <>
            <p>{log.customer.name}</p>
            <Space width={SpaceEnum.xs} />
          </>
        )}
        <p> +91 {log.customer.id} </p>
      </StyledLink>
    )
  }
  return null
}

const beneficiaryInfoView = (log: IReviewLog) => {
  if (log.beneficiary) {
    return (
      <>
        <Space width={SpaceEnum.xxs} />
        {log.beneficiary.name && (
          <>
            <p style={{ fontWeight: 600 }}>{log.beneficiary.name}</p>
            <Space width={SpaceEnum.xs} />
          </>
        )}
        <p> +91 {log.beneficiary.id} </p>
        <Space width={SpaceEnum.xxs} />
      </>
    )
  }
  return null
}

const actionDetail = (log: IReviewLog) => {
  switch (log.action) {
    case reviewerActionEnum.login:
      return <Section />
    case reviewerActionEnum.c_create:
    case reviewerActionEnum.c_verify:
    case reviewerActionEnum.c_update:
    case reviewerActionEnum.c_nodalId:
    case reviewerActionEnum.c_otp:
    case reviewerActionEnum.c_mandate:
      return (
        <Section>
          <span>{getActionDetailStarting(log.action)}</span>
          {customerInfoView(log)}
        </Section>
      )
    case reviewerActionEnum.b_verify:
    case reviewerActionEnum.b_create:
    case reviewerActionEnum.b_otp:
      return (
        <Section>
          <span>{getActionDetailStarting(log.action)}</span>
          {beneficiaryInfoView(log)}
          <span>for customer</span>
          {customerInfoView(log)}
        </Section>
      )
    case reviewerActionEnum.tx_approved:
    case reviewerActionEnum.tx_rejected:
      return (
        <Section>
          <span>{getActionDetailStarting(log.action)}</span>
          {transactionView(log)}
          <span>for customer</span>
          {customerInfoView(log)}
        </Section>
      )
    default:
      return <p>- - -</p>
  }
}

const StyledLink = styled(Link)`
  color: ${identity};
  font-weight: 600;
  display: flex;
`
const Section = styled.div`
  margin-bottom: 0.3rem;
  display: flex;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${dark};
  margin-bottom: 1rem;
`

export default ReviewerLogItem
