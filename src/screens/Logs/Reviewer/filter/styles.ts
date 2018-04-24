import styled from 'styled-components'
import { fog } from '../../../../styles/colors'

export const Container = styled.div`
  display: flex;
  border: 1px solid ${fog}
  align-items: center;
  border-radius: 0.5rem;
`

export const Label = styled.div`
  line-height: 2rem;
  border-right: 1px solid ${fog};
  padding: 0 0.5rem;
`
