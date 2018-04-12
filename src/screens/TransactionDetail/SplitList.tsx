import { default as React } from 'react'
import styled from 'styled-components'
import { ISplitTransaction } from '../../api/transaction-api'
import Card from '../../components/Card'
import CardTitle from '../../components/CardTitle'
import { grey } from '../../styles/colors'
import SplitItem from './SplitItem'

interface IProps {
  splits: ISplitTransaction[] | undefined
}

const SplitList: React.SFC<IProps> = props => {
  return (
    <Card>
      <CardTitle>Splits</CardTitle>
      <GridContainer>
        {props.splits && props.splits.length ? (
          props.splits.map(trx => <SplitItem split={trx} key={trx.id} />)
        ) : (
          <EmptyView />
        )}
      </GridContainer>
    </Card>
  )
}

const EmptyView = () => <Empty>Insufficient Balance</Empty>
const Empty = styled.p`
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  padding: 1rem;
  justify-content: center;
  color: ${grey};
  font-weight: 600;
`

const GridContainer = styled.div`
  display: grid;
  padding: 1rem 1rem 0 1rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14.5rem, 1fr));
`
export default SplitList
