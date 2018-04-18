import * as React from 'react'
import { fetchIVRLogsAPI } from '../../../api/logs-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import LogsList from '../../Logs/IVR/LogsList'
import CustomerIVRLogItem from './CustomerIVRLogItem'
interface IProps {
  customerPhone: string
}
const CustomerIVRLogContainer: React.SFC<IProps> = ({
  customerPhone,
}: IProps) => (
  <Card>
    <CardTitle>Call Logs</CardTitle>
    <LogsList searchFilter={customerPhone} api={fetchIVRLogsAPI}>
      {log => <CustomerIVRLogItem log={log} />}
    </LogsList>
  </Card>
)

export default CustomerIVRLogContainer
