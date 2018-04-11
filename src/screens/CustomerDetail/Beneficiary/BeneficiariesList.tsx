import { default as React } from 'react'
import styled from 'styled-components'
import { beneficiaryStatus, IBeneficiary } from '../../../api/customer-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import { grey } from '../../../styles/colors'
import BeneficiaryItem from './BeneficiaryItem'

interface IProps {
  beneficiaries: IBeneficiary[]
}

const BeneficiariesList: React.SFC<IProps> = ({ beneficiaries }: IProps) => {
  return (
    <Card>
      <CardTitle>Beneficiaries</CardTitle>
      <GridContainer>
        {beneficiaries && beneficiaries.length ? (
          getSortedBeneficiaries(beneficiaries).map(beneficiary => (
            <BeneficiaryItem beneficiary={beneficiary} key={beneficiary.id} />
          ))
        ) : (
          <EmptyView />
        )}
      </GridContainer>
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
const GridContainer = styled.div`
  display: grid;
  padding: 1rem 1rem 0 1rem;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14.5rem, 1fr));
`
export default BeneficiariesList
