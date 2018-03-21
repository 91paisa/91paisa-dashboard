import * as React from 'react'
import styled from 'styled-components'
import { dark, graphite } from '../../styles/colors'

interface IProps {
  phone: string
  style?: any
  fontSize?: any
}

const PhoneCell: React.SFC<IProps> = props => (
  <div style={{ display: 'flex', alignItems: 'flex-end', ...props.style }}>
    <CountryCode style={{ ...props.fontSize }}>+91</CountryCode>
    <Phone style={{ ...props.fontSize }}> {getSpacedPhone(props.phone)}</Phone>
  </div>
)

export function getSpacedPhone(phone: string): string {
  return (
    phone.substring(0, 4) +
    ' ' +
    phone.substring(4, 7) +
    ' ' +
    phone.substring(7)
  )
}

const CountryCode = styled.span`
  color: ${graphite};
  font-size: 1rem;
  padding-right: 4px;
`

const Phone = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: ${dark};
`

export default PhoneCell
