import * as React from 'react'
import styled from 'styled-components'
import { dark, graphite } from '../../styles/colors'

interface IProps {
  phone: string
}
const PhoneCell: React.SFC<IProps> = props => (
  <div style={{ display: 'flex', alignItems: 'flex-end' }}>
    <CountryCode>+91</CountryCode>
    <Phone>{props.phone}</Phone>
  </div>
)

const CountryCode = styled.span`
  color: ${graphite};
  font-size: 1.1rem;
  padding-right: 4px;
`

const Phone = styled.span`
  letter-spacing: 1.5px;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${dark};
`

export default PhoneCell
