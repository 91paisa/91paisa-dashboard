import styled from 'styled-components'
import {
  alertRed,
  fog,
  graphite,
  lightGrey,
  positiveGreen,
  white,
} from '../../styles/colors'

const CommonButton = styled.button`
  display: inline-block;
  padding: 0.2rem 1.3rem;
  border-radius: 9999px;
  border: 2px solid;
  font-size: 100%;
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  background: ${white};
  user-select: none;
  letter-spacing: 0.09rem;
  min-width: 7rem;
  opacity: 0.88;
  outline: none;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
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

export const PaginationButtonPrevious = CommonButton.extend`
  line-height: 1.4rem;
  min-width: 2rem;
  color: ${graphite};
  opacity: 1;
  border: 1px solid ${fog};
  border-radius: 0.5rem 0 0 0.5rem;
  &:disabled {
    background: ${white};
    cursor: not-allowed;
    color: ${lightGrey};
    text-shadow: none;
    &:hover {
      opacity: 0.8;
    }
  }
  &:after {
    content: '⬅';
  }
`

export const PaginationButtonNext = PaginationButtonPrevious.extend`
  border-radius: 0 0.5rem 0.5rem 0;
  &:after {
    content: '➡';
  }
`
