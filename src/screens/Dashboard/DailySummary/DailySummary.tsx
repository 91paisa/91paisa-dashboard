import * as React from 'react'
import styled from 'styled-components'
import { IStats } from '../../../api/statistics-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import { toRupee } from '../../../helpers/unit-helper'
import {
  alertPending,
  alertRed,
  lightGrey,
  positiveGreen,
} from '../../../styles/colors'
interface IProps {
  stats?: IStats
}

const DailySummary: React.SFC<IProps> = ({ stats }: IProps) => (
  <Container>
    <Card style={{ padding: '1rem' }}>
      <CardTitle>Daily Summary</CardTitle>
      {stats && (
        <>
          {stats.customer && (
            <>
              <InnerContainer>
                <Label>Customers</Label>
                <SubLabel>
                  Verified: <GreenText>{stats.customer.verified}</GreenText> /{' '}
                  <Text>{stats.customer.total}</Text>
                </SubLabel>
              </InnerContainer>
              <Label>Mandate</Label>
              <RowFlex>
                <SubLabel>
                  initiated:{' '}
                  <OrangeText>{stats.customer.mandateInitiated}</OrangeText>
                </SubLabel>
                <SubLabel>
                  rejected: <RedText>{stats.customer.mandateRejected}</RedText>
                </SubLabel>
                <SubLabel>
                  approved:{' '}
                  <GreenText>{stats.customer.mandateApproved}</GreenText>
                </SubLabel>
              </RowFlex>
              <InnerContainer />
            </>
          )}

          {stats.beneficiary && (
            <InnerContainer>
              <Label>Beneficiaries</Label>
              <SubLabel>
                Verified: <GreenText>{stats.beneficiary.verified}</GreenText> /{' '}
                <Text>{stats.beneficiary.total}</Text>
              </SubLabel>
            </InnerContainer>
          )}

          {stats.transaction && (
            <InnerContainer>
              <Label>Transactions</Label>
              <RowFlex>
                <SubLabel>
                  Total: <Text>{toRupee(stats.transaction.total.amount)}</Text>
                  <Text>({stats.transaction.total.count})</Text>
                </SubLabel>
                <SubLabel>
                  Success:{' '}
                  <GreenText>
                    {toRupee(stats.transaction.successful.amount)}
                  </GreenText>
                  <Text>({stats.transaction.successful.count})</Text>
                </SubLabel>
                <SubLabel>
                  Fail:{' '}
                  <RedText>{toRupee(stats.transaction.failed.amount)}</RedText>
                  <Text>({stats.transaction.failed.count})</Text>
                </SubLabel>
                <SubLabel>
                  Initiated:{' '}
                  <Text>{toRupee(stats.transaction.initiated.amount)}</Text>
                  <Text>({stats.transaction.initiated.count})</Text>
                </SubLabel>
                <SubLabel>
                  In Progress:{' '}
                  <OrangeText>
                    {toRupee(stats.transaction.processing.amount)}
                  </OrangeText>
                  <Text>({stats.transaction.processing.count})</Text>
                </SubLabel>
                <SubLabel>
                  Cancel:{' '}
                  <RedText>
                    {toRupee(stats.transaction.cancelled.amount)}
                  </RedText>
                  <Text>({stats.transaction.cancelled.count})</Text>
                </SubLabel>
              </RowFlex>
            </InnerContainer>
          )}
        </>
      )}
    </Card>
  </Container>
)

const RowFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const InnerContainer = styled.div`
  border-radius: 0.5rem;
  border: solid ${lightGrey} 1px;
  margin-bottom: 1rem;
`

const Label = styled.p`
  font-weight: 600;
  background: ${lightGrey};
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
`

const Text = styled.span`
  font-weight: 600;
  padding-right: 4px;
  display: inline;
  font-size: 1.2rem;
`
const GreenText = Text.extend`
  color: ${positiveGreen};
`

const RedText = Text.extend`
  color: ${alertRed};
`

const OrangeText = Text.extend`
  color: ${alertPending};
`

const SubLabel = styled.p`
  font-size: 1rem;
  padding: 1rem;
  text-transform: capitalize;
`

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`
export default DailySummary
