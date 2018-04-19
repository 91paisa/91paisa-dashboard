import * as React from 'react'
import { fetchIVRLogsAPI } from '../../../api/logs-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import { getRowHeightForIVRLogItem } from '../../../helpers/unit-helper'
import IVRLogList from '../../Logs/IVR/IVRLogList'
import CustomerIVRLogItem from './CustomerIVRLogItem'
interface IProps {
  customerPhone: string
}
const CustomerIVRLogContainer: React.SFC<IProps> = ({
  customerPhone,
}: IProps) => (
  <Card>
    <CardTitle>Call Logs</CardTitle>
    <IVRLogList
      rowHeight={getRowHeightForIVRLogItem()}
      searchFilter={customerPhone}
      api={fetchIVRLogsAPI}
    >
      {log => <CustomerIVRLogItem log={log} />}
    </IVRLogList>
  </Card>
)

export default CustomerIVRLogContainer
