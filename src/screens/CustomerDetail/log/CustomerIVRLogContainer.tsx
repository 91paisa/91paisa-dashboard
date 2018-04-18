import * as React from 'react'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import IVRLogsList from '../../Logs/IVR/IVRLogsList'
import CustomerIVRLogItem from './CustomerIVRLogItem'
interface IProps {
  customerPhone: string
}
const CustomerIVRLogContainer: React.SFC<IProps> = ({
  customerPhone,
}: IProps) => (
  <Card>
    <CardTitle>Call Logs</CardTitle>
    <IVRLogsList searchFilter={customerPhone}>
      {log => <CustomerIVRLogItem log={log} />}
    </IVRLogsList>
  </Card>
)

export default CustomerIVRLogContainer
