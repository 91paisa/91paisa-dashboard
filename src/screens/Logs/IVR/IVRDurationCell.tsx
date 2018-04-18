import moment from 'moment'
import * as React from 'react'
import Space, { SpaceEnum } from '../../../components/Space'
import {
  getCallDuration,
  getDDMMYYYY,
  getLT,
} from '../../../helpers/time-helper'
import { dark } from '../../../styles/colors'

interface IProps {
  createdTimestamp: string
  updatedTimestamp: string
}

const IVRDurationCell: React.SFC<IProps> = ({
  createdTimestamp,
  updatedTimestamp,
}: IProps) => (
  <div
    style={{ paddingLeft: '1rem', display: 'flex', color: dark }}
    title={`${getLT(createdTimestamp)} ${getDDMMYYYY(createdTimestamp)}`}
  >
    {moment(createdTimestamp)
      .startOf('day')
      .fromNow()}
    <Space width={SpaceEnum.m} />
    <p>{getCallDuration(createdTimestamp, updatedTimestamp)}</p>
  </div>
)

export default IVRDurationCell
