import * as React from 'react'
import styled from 'styled-components'
import { IStats } from '../../../api/statistics-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import { toRupee } from '../../../helpers/unit-helper'
import { lightGrey } from '../../../styles/colors'
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
          {stats.splitTransaction && (
            <InnerContainer>
              <Label>Split Transactions</Label>
              <RowFlex>
                <SubLabel>
                  Success:{' '}
                  <Text>
                    {toRupee(stats.splitTransaction.successful.amount)}
                  </Text>
                  <Text>({stats.splitTransaction.successful.count})</Text>
                </SubLabel>
                <SubLabel>
                  Fail:{' '}
                  <Text>{toRupee(stats.splitTransaction.failed.amount)}</Text>
                  <Text>({stats.splitTransaction.failed.count})</Text>
                </SubLabel>
                <SubLabel>
                  Initiated:{' '}
                  <Text>
                    {toRupee(stats.splitTransaction.initiated.amount)}
                  </Text>
                  <Text>({stats.splitTransaction.initiated.count})</Text>
                </SubLabel>
                <SubLabel>
                  In Progress:{' '}
                  <Text>
                    {toRupee(stats.splitTransaction.processing.amount)}
                  </Text>
                  <Text>({stats.splitTransaction.processing.count})</Text>
                </SubLabel>
                <SubLabel>
                  Cancel:{' '}
                  <Text>
                    {toRupee(stats.splitTransaction.cancelled.amount)}
                  </Text>
                  <Text>({stats.splitTransaction.cancelled.count})</Text>
                </SubLabel>
                <TotalSubLabel>
                  Total:{' '}
                  <Text>{toRupee(stats.splitTransaction.total.amount)}</Text>
                  <Text>({stats.splitTransaction.total.count})</Text>
                </TotalSubLabel>
              </RowFlex>
            </InnerContainer>
          )}
          {stats.transaction && (
            <InnerContainer>
              <Label>Overall Transactions count</Label>
              <RowFlex>
                <SubLabel>
                  Initiated: <Text>{stats.transaction.initiated}</Text>
                </SubLabel>
                <SubLabel>
                  Cancelled: <Text>{stats.transaction.cancelled}</Text>
                </SubLabel>
                <SubLabel>
                  Failed: <Text>{stats.transaction.failed}</Text>
                </SubLabel>
                <SubLabel>
                  Success: <Text>{stats.transaction.successful}</Text>
                </SubLabel>
                <div />
                <TotalSubLabel>
                  Total: <Text>{stats.transaction.total}</Text>
                </TotalSubLabel>
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
const TotalSubLabel = SubLabel.extend`
  background: ${lightGrey};
  border-radius: 0 0 0.5rem 0;
`

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`
export default DailySummary
