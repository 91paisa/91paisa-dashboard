import { default as React } from 'react'
import styled from 'styled-components'
import { beneficiaryStatus, IBeneficiary } from '../../../api/customer-api'
import Card from '../../../components/Card'
import { grey } from '../../../styles/colors'
import BeneficiaryItem from './BeneficiaryItem'

interface IProps {
  beneficiaries: IBeneficiary[]
}

const BeneficiariesList: React.SFC<IProps> = ({ beneficiaries }: IProps) => {
  return (
    <Card>
      <Title>Beneficiaries</Title>
      <FlexContainer>
        {beneficiaries && beneficiaries.length ? (
          getSortedBeneficiaries(beneficiaries).map(beneficiary => (
            <BeneficiaryItem beneficiary={beneficiary} key={beneficiary.id} />
          ))
        ) : (
          <EmptyView />
        )}
      </FlexContainer>
    </Card>
  )
}

const getSortedBeneficiaries = (
  beneficiaries: IBeneficiary[],
): IBeneficiary[] => {
  const verifiedBeneficiaries = beneficiaries.filter(
    b => b.status === beneficiaryStatus.verified,
  )
  const unverifiedBeneficiaries = beneficiaries.filter(
    b => b.status === beneficiaryStatus.unverified,
  )
  return verifiedBeneficiaries.concat(unverifiedBeneficiaries)
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
  font-size: 1.3rem;
  padding: 1rem 0 0 1rem;
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default BeneficiariesList
