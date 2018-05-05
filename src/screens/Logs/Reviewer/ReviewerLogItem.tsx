import moment from 'moment'
import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  IReviewLog,
  reviewerActionEnum,
  searchFilterType,
} from '../../../api/logs-api'
import { IReviewer } from '../../../api/reviewer-api'
import Avatar from '../../../components/Avatar'
import Space, { SpaceEnum } from '../../../components/Space'
import { getDDMMYY, getLT } from '../../../helpers/time-helper'
import { dark, identity } from '../../../styles/colors'
import { getActionDetailStarting } from './reviewer-log-helper'
import ReviewAction from './ReviewerAction'
interface IProps {
  log: IReviewLog
  reviewer: IReviewer
  updateSearchFilter: (reviewer: searchFilterType) => void
}

class ReviewerLogItem extends React.Component<IProps> {
  public render() {
    const { action, createdTimestamp } = this.props.log
    const { reviewer, updateSearchFilter } = this.props
    return (
      <Container>
        <Avatar src={reviewer.image} />
        <div>
          {reviewAndActionView(reviewer, action, updateSearchFilter)}
          {actionDetail(this.props.log)}
          {timestampView(createdTimestamp)}
        </div>
      </Container>
    )
  }
}

const timestampView = (createdTimestamp: string) => (
  <Section>
    {moment(createdTimestamp).fromNow()} • {getLT(createdTimestamp)} •{' '}
    {getDDMMYY(createdTimestamp)}
  </Section>
)

const reviewAndActionView = (
  reviewer: { id: string; name: string },
  action: reviewerActionEnum,
  updateSearchFilter: (filter: searchFilterType) => void,
) => (
  <Section>
    <NameLink onClick={() => updateSearchFilter(reviewer.id)}>
      {reviewer.name}
    </NameLink>
    <Space width={SpaceEnum.s} />
    <ReviewAction
      onClick={() => updateSearchFilter(action.toString())}
      action={action}
    />
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
            <span>{log.customer.name}</span>
            <Space width={SpaceEnum.xs} />
          </>
        )}
        <span> +91 {log.customer.id} </span>
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
            <span style={{ fontWeight: 600 }}>{log.beneficiary.name}</span>
            <Space width={SpaceEnum.xs} />
          </>
        )}
        <span> +91 {log.beneficiary.id} </span>
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
          {getActionDetailStarting(log.action)}
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
  margin-bottom: 0.5rem;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
`

const NameLink = styled.p`
  color: ${identity};
  cursor: pointer;
  font-weight: 600;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  color: ${dark};
  margin-bottom: 1rem;
`

export default ReviewerLogItem
