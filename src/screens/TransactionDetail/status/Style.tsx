import styled from 'styled-components'
import {
  nodalStatusEnum,
  refundStatusEnum,
  settlementStatusEnum,
} from '../../../api/transaction-api'
import { getNodalColor, getRefundColor } from '../../../helpers/color-helper'
import { white } from '../../../styles/colors'

export const enum statusTypeEnum {
  refund,
  settlement,
}

interface IProps {
  statusCode: nodalStatusEnum | settlementStatusEnum
  statusType: statusTypeEnum
}
export const NodalStatusLabel: any = styled.span`
  background: white;
  color: ${({ statusCode, statusType }: IProps) =>
    getColor(statusCode, statusType)};
  opacity: 0.94;
  height: 100%;
  font-weight: 600;
  border: 2px solid;
  border-radius: 0.2rem 0 0 0.2rem;
  padding: 0 0.4rem 0 0.2rem;
  font-style: normal;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`

export const NodalStatusText = styled.p`
  padding: 0 0.5rem 0 0.3rem;
  color: ${white};
  opacity: 1;
  line-height: 1.6rem;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 600;
  align-items: center;
  font-style: italic;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`

export const NodalStatusContainer: any = styled.div`
  background: ${({ statusCode, statusType }: IProps) =>
    getColor(statusCode, statusType)};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const getColor = (statusCode: any, statusType: statusTypeEnum): string => {
  switch (statusType) {
    case statusTypeEnum.settlement:
      return getNodalColor(statusCode as nodalStatusEnum)
    case statusTypeEnum.refund:
      return getRefundColor(statusCode as refundStatusEnum)
  }
}
