import * as React from 'react'
import styled from 'styled-components'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
interface IProps {
  customerStats?: any
}
const DailySummary: React.SFC<IProps> = props => (
  <Container>
    <Card style={{ padding: '1rem' }}>
      <CardTitle>Dummy Daily Summary [Please Ignore]</CardTitle>
      <p>Customers</p>
      <p>Verified: 10/14</p>
      <hr />
      <p>Mandates:</p>
      <p>initiated: 3</p>
      <p>success: 4</p>
      <p>fail: 1</p>
      <hr />
      <p>Total Beneficiaries added: 18</p>
      <hr />
      <p>Transactions</p>
      <p>initiated: 3 (rs10000)</p>
      <p>success: 4 (rs)</p>
      <p>fail: 1</p>
    </Card>
  </Container>
)

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`
export default DailySummary
