import styled from 'styled-components'
import { alertRed, positiveGreen } from '../../styles/colors'

const CommonButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 2px solid;
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  user-select: none;
  letter-spacing: 0.12rem;
  min-width: 7rem;
  &:hover {
    transform: translateY(-1px);
  }
`

export const ApproveButton = CommonButton.extend`
  border-color: ${positiveGreen};
  color: ${positiveGreen};
`
export const RejectButton = CommonButton.extend`
  border-color: ${alertRed};
  color: ${alertRed};
`
