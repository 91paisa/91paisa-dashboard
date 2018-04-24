import * as React from 'react'
import styled from 'styled-components'
import { IStats } from '../../../api/statistics-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import { toRupee } from '../../../helpers/unit-helper'
import {
  lightGrey,
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
                  Verified: <Text>{stats.customer.verified}</Text> /{' '}
                  <Text>{stats.customer.total}</Text>
                </SubLabel>
              </InnerContainer>
              <Label>Mandate</Label>
              <RowFlex>
                <SubLabel>
                  initiated: <Text>{stats.customer.mandateInitiated}</Text>
                </SubLabel>
                <SubLabel>
                  rejected: <Text>{stats.customer.mandateRejected}</Text>
                </SubLabel>
                <SubLabel>
                  approved: <Text>{stats.customer.mandateApproved}</Text>
                </SubLabel>
              </RowFlex>
              <InnerContainer />
            </>
          )}

          {stats.beneficiary && (
            <InnerContainer>
              <Label>Beneficiaries</Label>
              <SubLabel>
                Verified: <Text>{stats.beneficiary.verified}</Text> /{' '}
                <Text>{stats.beneficiary.total}</Text>
              </SubLabel>
            </InnerContainer>
          )}

          {stats.transaction && (
            <InnerContainer>
              <Label>Transactions</Label>
              <RowFlex>
                <SubLabel>
                  Success:{' '}
                  <Text>{toRupee(stats.transaction.successful.amount)}</Text>
                  <Text>({stats.transaction.successful.count})</Text>
                </SubLabel>
                <SubLabel>
                  Fail: <Text>{toRupee(stats.transaction.failed.amount)}</Text>
                  <Text>({stats.transaction.failed.count})</Text>
                </SubLabel>
                <SubLabel>
                  Initiated:{' '}
                  <Text>{toRupee(stats.transaction.initiated.amount)}</Text>
                  <Text>({stats.transaction.initiated.count})</Text>
                </SubLabel>
                <SubLabel>
                  In Progress:{' '}
                  <Text>{toRupee(stats.transaction.processing.amount)}</Text>
                  <Text>({stats.transaction.processing.count})</Text>
                </SubLabel>
                <SubLabel>
                  Cancel:{' '}
                  <Text>{toRupee(stats.transaction.cancelled.amount)}</Text>
                  <Text>({stats.transaction.cancelled.count})</Text>
                </SubLabel>
                <SubLabel>
                  Total: <Text>{toRupee(stats.transaction.total.amount)}</Text>
                  <Text>({stats.transaction.total.count})</Text>
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
  font-weight: 500;
  padding-right: 4px;
  display: inline;
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
