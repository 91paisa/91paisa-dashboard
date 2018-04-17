import * as React from 'react'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import IVRLogsList from '../../Logs/IVR/IVRLogsList'
interface IProps {
  customerPhone: string
}
const CustomerIVRLogContainer: React.SFC<IProps> = ({
  customerPhone,
}: IProps) => (
  <Card>
    <CardTitle>Call Logs</CardTitle>
    <IVRLogsList forCustomerDetail={true} customerPhone={customerPhone} />
  </Card>
)

export default CustomerIVRLogContainer
