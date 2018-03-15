import { default as React } from 'react'
import styled from 'styled-components'
import { ISplitTransaction } from '../../api/transaction-api'
import Card from '../../components/Card'
import { grey } from '../../styles/colors'
import SplitItem from './SplitItem'

interface IProps {
  splits: ISplitTransaction[] | undefined
}

const SplitList: React.SFC<IProps> = props => {
  return (
    <Card>
      <Title>Splits</Title>
      <FlexContainer>
        {props.splits && props.splits.length ? (
          props.splits.map(trx => <SplitItem split={trx} key={trx.id} />)
        ) : (
          <EmptyView />
        )}
      </FlexContainer>
    </Card>
  )
}

const EmptyView = () => <Empty>No splits</Empty>
const Empty = styled.p`
  text-align: center;
  display: inline-block;
  font-size: 2rem;
  padding: 1rem;
  justify-content: center;
  color: ${grey};
  font-weight: 600;
`
const Title = styled.p`
  font-size: 1.3rem;
  padding: 1rem 0 0 1rem;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default SplitList
