import { default as React } from 'react'
import styled from 'styled-components'
import { IBeneficiary } from '../../../api/customer-api'
import Card from '../../../components/Card'
import { grey } from '../../../styles/colors'
import BeneficiaryItem from './BeneficiaryItem'
interface IProps {
  beneficiaries: IBeneficiary[]
}
const BeneficiariesList: React.SFC<IProps> = props => {
  return (
    <Card>
      <Title>Beneficiaries</Title>
      <FlexContainer>
        {props.beneficiaries && props.beneficiaries.length ? (
          props.beneficiaries.map(beneficiary => (
            <BeneficiaryItem beneficiary={beneficiary} key={beneficiary.id} />
          ))
        ) : (
          <EmptyView />
        )}
      </FlexContainer>
    </Card>
  )
}

const EmptyView = () => <Empty>No beneficiary added</Empty>
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
  font-size: 1.5rem;
  padding: 1rem;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default BeneficiariesList
