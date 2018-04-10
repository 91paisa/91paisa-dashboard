import styled from 'styled-components'
import { fog, white } from '../styles/colors'
import { phone } from '../styles/screenSize'

const Card = styled.div`
  box-shadow: none;
  margin: 1% 1%;
  display: flex;
  background: ${white};
  flex-direction: column;
  padding-bottom: 1rem;
  border: 1px solid ${fog};
  border-radius: 0.5rem;
  &:hover {
    box-shadow: 0 4px 8px hsla(0, 0%, 0%, 0.1);
  }
  transition-duration: 300ms;
  @media (${phone}) {
    box-shadow: none;
    border: 1px solid ${fog};
  }
`

export default Card
