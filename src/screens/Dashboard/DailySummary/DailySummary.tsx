import * as React from 'react'
import styled from 'styled-components'
import { ICustomerStatistics } from '../../../api/statistics-api'
import Card from '../../../components/Card'
import CardTitle from '../../../components/CardTitle'
import {
  alertPending,
  alertRed,
  lightGrey,
  positiveGreen,
} from '../../../styles/colors'
interface IProps {
  customerStats?: ICustomerStatistics
}
const DailySummary: React.SFC<IProps> = ({ customerStats }: IProps) => (
  <Container>
    <Card style={{ padding: '1rem' }}>
      <CardTitle>Daily Summary</CardTitle>
      {customerStats && (
        <>
          <InnerContainer>
            <Label>Customers</Label>
            <SubLabel>
              Verified: <GreenText>{customerStats.verified}</GreenText> /{' '}
              <Text>
                <Text>{customerStats.total}</Text>
              </Text>
            </SubLabel>
          </InnerContainer>
          <Label>Mandate</Label>
          <RowFlex>
            <SubLabel>
              initiated:{' '}
              <OrangeText>{customerStats.mandateInitiated}</OrangeText>
            </SubLabel>
            <SubLabel>
              rejected: <RedText>{customerStats.mandateRejected}</RedText>
            </SubLabel>
          </RowFlex>
          <RowFlex>
            <SubLabel>
              not requested: <Text>{customerStats.mandateNotRequested}</Text>
            </SubLabel>
            <SubLabel>
              approved: <GreenText>{customerStats.mandateApproved}</GreenText>
            </SubLabel>
          </RowFlex>
          <InnerContainer />
        </>
      )}
    </Card>
  </Container>
)

const RowFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`
export default DailySummary
