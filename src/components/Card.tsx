import styled from 'styled-components'
import { fog, white } from '../styles/colors'

const Card = styled.div`
  box-shadow: none;
  margin: 1% 1%;
  padding: 1rem;
  display: flex;
  background: ${white};
  flex-direction: column;
  border: 1px solid ${fog};
  border-radius: 0.5rem;
`

export default Card
