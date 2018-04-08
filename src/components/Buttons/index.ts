import styled from 'styled-components'
import { alertRed, positiveGreen, white } from '../../styles/colors'

const CommonButton = styled.a`
  display: inline-block;
  padding: 0.2rem 1.3rem;
  border-radius: 9999px;
  border: 2px solid;
  font-size: 100%;
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  user-select: none;
  letter-spacing: 0.09rem;
  min-width: 7rem;
  opacity: 0.88;
  &:hover {
    opacity: 1;
  }
`

export const ApproveButton = CommonButton.extend`
  background-color: ${positiveGreen};
  color: ${white};
  border-color: ${positiveGreen};
`
export const RejectButton = CommonButton.extend`
  border-color: ${alertRed};
  color: ${alertRed};
`
