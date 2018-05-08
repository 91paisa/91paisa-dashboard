import moment from 'moment'
import * as React from 'react'
import { IMandateTimestamp } from '../../api/customer-api'

const MandateTimestampInitiatedDuration: React.SFC<IMandateTimestamp> = ({
  initiated,
}) => <span style={{ fontSize: 'inherit' }}>{moment(initiated).fromNow()}</span>

export default MandateTimestampInitiatedDuration
