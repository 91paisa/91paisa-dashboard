import { Table } from 'react-virtualized'
import styled from 'styled-components'
import { lightGrey, primary, white } from './colors'

export const TableContainer = styled(Table as any)`
  outline: none;
  background: white;
  //border-radius: 4px;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.1);
`

export const headerRow = {
  background: primary,
  boxShadow: '0 1px 2px hsla(0, 0%, 0%, 0.1)',
  color: white,
  letterSpacing: '2px',
}

export const oddRow = {
  background: `${white}`,
}

export const evenRow = {
  background: `${lightGrey}`,
}
