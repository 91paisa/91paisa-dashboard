import * as React from 'react'
import styled from 'styled-components'
import { ISettlementContainer } from '../../../api/transaction-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import SettlementToEkoOrZms from './SettlementToEkoOrZms'
interface IProps {
  settlement: ISettlementContainer
}
class SettlementContainer extends React.Component<IProps> {
  public render() {
    const { eko, zms } = this.props.settlement
    return (
      <Card>
        <CardTitle>Settlement</CardTitle>
        <Grid>
          {eko && <SettlementToEkoOrZms title={'EKO/-'} {...eko} />}
          {zms && <SettlementToEkoOrZms title={'ZMS'} {...zms} />}
        </Grid>
      </Card>
    )
  }
}

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export default SettlementContainer
